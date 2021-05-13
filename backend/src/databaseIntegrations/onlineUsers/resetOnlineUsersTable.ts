async function resetOnlineUsersTable () {
    await db.run("DELETE FROM online_users;");
}