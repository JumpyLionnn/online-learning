async function getUserById (id: number) {
    return await db.get("SELECT * FROM users WHERE id = ?", [id]);
}