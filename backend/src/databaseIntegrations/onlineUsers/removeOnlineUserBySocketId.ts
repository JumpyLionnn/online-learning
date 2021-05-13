async function removeOnlineUserBySocketId (socketId: number){
    await db.run("DELETE FROM online_users WHERE socket_id = ?", [socketId]);
}