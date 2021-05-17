async function addNewSchoolItem (schoolName: string, managerId: number) {
    await db.run("INSERT INTO schools(name, manager_id, private, join_code) VALUES (?, ?, ?, ?);", [schoolName, managerId]);
}