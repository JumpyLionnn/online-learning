async function addNewUser (username: string, email: string, password: string, type: string){
    await db.run("INSERT INTO users(username, email, password, type) VALUES (?, ?, ?, ?)", [username, email, password, type]);
}