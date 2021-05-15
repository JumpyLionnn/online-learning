async function getUserById (id: number): Promise<DatabaseUserColumn | undefined> {
    return await db.get("SELECT * FROM users WHERE id = ?", [id]) as DatabaseUserColumn | undefined;
}