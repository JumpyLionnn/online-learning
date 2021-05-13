async function createOnlineUsersTable () {
    await db.run(`
    CREATE TABLE IF NOT EXISTS online_users(user_id INTEGER, socket_id TEXT, time_connected INTEGER);`
    );
}