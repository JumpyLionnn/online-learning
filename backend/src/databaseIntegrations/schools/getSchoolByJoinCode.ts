async function getSchoolByJoinCode (joinCode: string): Promise<DatabaseSchoolRow | undefined> {
    return await db.get("SELECT * FROM schools WHERE join_code = ?", [joinCode]) as DatabaseSchoolRow | undefined;
}