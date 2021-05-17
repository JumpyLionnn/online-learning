async function getSchoolsByManagerId (managerId: number): Promise<DatabaseSchoolColumn[] | []> {
    return await db.getAll("", [managerId]) as DatabaseSchoolColumn[] | [];
}