async function removeOnlineUserById (id: number){
    await db.run("DELETE FROM online_users WHERE user_id = ?", [id]);
}