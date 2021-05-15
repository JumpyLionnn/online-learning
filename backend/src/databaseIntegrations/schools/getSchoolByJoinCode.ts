async function getSchoolByJoinCode (joinCode: string): Promise<DatabaseSchoolColumn | undefined> {
    return await db.get("SELECT * FROM schools WHERE join_code = ?", [joinCode]) as DatabaseSchoolColumn | undefined;
}