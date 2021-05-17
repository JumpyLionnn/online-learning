async function getUserById (id: number): Promise<DatabaseUserRow | undefined> {
    return await db.get("SELECT * FROM users WHERE id = ?", [id]) as DatabaseUserRow | undefined;
}