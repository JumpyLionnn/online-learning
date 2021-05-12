async function addNewSchoolItem (schoolName: string, managerId: number) {
    await db.run("INSERT INTO schools(name, managerId) VALUES (?, ?);", [schoolName, managerId]);
}