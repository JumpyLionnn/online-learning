async function addOnlineUserItem (userId: number, socketId: string, timeConnected: number) {
    await db.run("INSERT INTO online_users(user_id, socket_id, time_connected) VALUES (?, ?, ?);", [userId, socketId, timeConnected]);
}