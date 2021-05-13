async function addNewSchoolItem (schoolName: string, managerId: number) {
    await db.run("INSERT INTO schools(name, manager_id) VALUES (?, ?);", [schoolName, managerId]);
}