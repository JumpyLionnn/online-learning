async function addNewUserItem (firstName: string, lastName: string, email: string, password: string, type: string){
    await db.run("INSERT INTO users(first_name, last_name, email, password, type) VALUES (?, ?, ?, ?, ?)", [firstName, lastName, email, password, type]);
}