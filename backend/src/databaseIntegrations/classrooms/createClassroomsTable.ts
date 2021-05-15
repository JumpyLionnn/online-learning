async function createClassroomsTable () {
    await db.run("CREATE TABLE IF NOT EXISTS classrooms(id INTEGER PRIMARY KEY, name VARCHAR(30), schoolId INTEGER);");
}