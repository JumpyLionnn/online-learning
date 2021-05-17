async function getUserByEmail (email: string): Promise<DatabaseUserRow | undefined> {
    return await db.get("SELECT * FROM users WHERE email = ?;", [email]) as DatabaseUserRow | undefined;
}