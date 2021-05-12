async function createUsersTable (){
    await db.run(`
    CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username VARCHAR(50), email TEXT, password TEXT, type VARCHAR(10));`
    );
}