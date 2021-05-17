async function getSchoolByNameAndManagerId (name: string, managerId: number): Promise<DatabaseSchoolRow | undefined> {
    return await db.get("SELECT * FROM schools WHERE name = ? AND manager_id = ?;", [name, managerId]) as DatabaseSchoolRow | undefined;
}