"""
Custom session storage: in-flight messages are kept in SQLite, so they
survive a restart of the application (not only a lost connection).

BaseSession implements the session logic, a storage only provides
a few primitives.
"""
import asyncio
import json
import logging
import os
import sqlite3
from typing import Optional, Sequence

from zenmqtt.client import MQTTClient
from zenmqtt.mqtt.session import (
    BaseSession,
    OutgoingMessage,
    OutgoingMessageState,
    PacketIdentifier,
    SessionOptions,
)

MQTT_URL = os.environ.get("MQTT_URL", "tcp://localhost:1883")
MQTT_USERNAME = os.environ.get("MQTT_USERNAME")
MQTT_PASSWORD = os.environ.get("MQTT_PASSWORD")

DATABASE = os.environ.get("SESSION_DATABASE", "zenmqtt-session.sqlite3")
TOPIC = "zenmqtt/examples/sqlite-session"

logging.basicConfig(level=logging.INFO)


class SQLiteSession(BaseSession):
    """
    Blocking sqlite3 calls are fine for an example; use an async driver
    (e.g. aiosqlite) in a real application.
    """

    def __init__(self, path: str, options: Optional[SessionOptions] = None) -> None:
        super().__init__(options)

        self._db = sqlite3.connect(path)
        self._db.executescript(
            """
            CREATE TABLE IF NOT EXISTS outgoing_messages (
                packet_identifier INTEGER PRIMARY KEY,
                topic TEXT NOT NULL,
                payload BLOB NOT NULL,
                qos INTEGER NOT NULL,
                retain INTEGER NOT NULL,
                properties TEXT NOT NULL,
                state INTEGER NOT NULL,
                -- keeps the original order of messages
                position INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS incoming_messages (
                packet_identifier INTEGER PRIMARY KEY
            );
            """
        )

    def close(self) -> None:
        self._db.close()

    async def _save_outgoing_message(self, message: OutgoingMessage) -> None:
        # update in place, so the message keeps its position
        with self._db:
            self._db.execute(
                """
                INSERT INTO outgoing_messages VALUES (
                    ?, ?, ?, ?, ?, ?, ?,
                    (SELECT COALESCE(MAX(position), 0) + 1 FROM outgoing_messages)
                )
                ON CONFLICT (packet_identifier) DO UPDATE SET state = excluded.state
                """,
                (
                    message.packet_identifier,
                    message.topic,
                    message.payload,
                    message.qos,
                    message.retain,
                    json.dumps(message.properties),
                    message.state,
                ),
            )

    async def _load_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> Optional[OutgoingMessage]:
        row = self._db.execute(
            "SELECT * FROM outgoing_messages WHERE packet_identifier = ?",
            (packet_identifier,),
        ).fetchone()

        return self._to_message(row) if row else None

    async def _load_outgoing_messages(self) -> Sequence[OutgoingMessage]:
        rows = self._db.execute(
            "SELECT * FROM outgoing_messages ORDER BY position"
        ).fetchall()

        return [self._to_message(row) for row in rows]

    async def _delete_outgoing_message(
        self, packet_identifier: PacketIdentifier
    ) -> bool:
        with self._db:
            cursor = self._db.execute(
                "DELETE FROM outgoing_messages WHERE packet_identifier = ?",
                (packet_identifier,),
            )

        return cursor.rowcount > 0

    async def _save_incoming_message(self, packet_identifier: PacketIdentifier) -> None:
        with self._db:
            self._db.execute(
                "INSERT OR IGNORE INTO incoming_messages VALUES (?)",
                (packet_identifier,),
            )

    async def _has_incoming_message(self, packet_identifier: PacketIdentifier) -> bool:
        row = self._db.execute(
            "SELECT 1 FROM incoming_messages WHERE packet_identifier = ?",
            (packet_identifier,),
        ).fetchone()

        return row is not None

    async def _delete_incoming_message(
        self, packet_identifier: PacketIdentifier
    ) -> None:
        with self._db:
            self._db.execute(
                "DELETE FROM incoming_messages WHERE packet_identifier = ?",
                (packet_identifier,),
            )

    async def _clear(self) -> None:
        with self._db:
            self._db.execute("DELETE FROM outgoing_messages")
            self._db.execute("DELETE FROM incoming_messages")

    @staticmethod
    def _to_message(row) -> OutgoingMessage:
        packet_identifier, topic, payload, qos, retain, properties, state, _ = row

        return OutgoingMessage(
            packet_identifier=packet_identifier,
            topic=topic,
            payload=payload,
            qos=qos,
            retain=bool(retain),
            properties=json.loads(properties),
            state=OutgoingMessageState(state),
        )


async def main():
    session = SQLiteSession(DATABASE)

    pending = await session.get_pending_outgoing_messages()
    print("restored pending messages:", len(pending))

    client = MQTTClient("zenmqtt-example-sqlite-session", session=session)

    if MQTT_USERNAME:
        client.authorize(MQTT_USERNAME, MQTT_PASSWORD)

    # pending messages are re-sent here, if the server still has the session
    await client.connect(
        MQTT_URL,
        clean_session=False,
        properties={"session_expiry_interval": 3600},
    )

    result = await client.publish(TOPIC, b"stored in sqlite until acknowledged", qos=2)
    print("published:", result)

    await client.disconnect()
    session.close()


if __name__ == "__main__":
    asyncio.run(main())
