async function getUserByEmail (email: string): Promise<DatabaseUserColumn | undefined> {
    return await db.get("SELECT * FROM users WHERE email = ?;", [email]) as DatabaseUserColumn | undefined;
}