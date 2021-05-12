async function getUserByEmail (email: string){
    return await db.get("SELECT * FROM users WHERE email = ?;", [email]);
}