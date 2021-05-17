async function getSchoolsByManagerId (managerId: number): Promise<DatabaseSchoolRow[] | []> {
    return await db.getAll("", [managerId]) as DatabaseSchoolRow[] | [];
}