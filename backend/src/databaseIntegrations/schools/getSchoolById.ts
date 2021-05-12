async function getSchoolById (id: number) {
    return await db.get("SELECT * FROM schools WHERE id = ?", [id]);
}