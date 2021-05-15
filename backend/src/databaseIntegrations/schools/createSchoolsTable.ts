async function createSchoolsTable (){
    await db.run(`
    CREATE TABLE IF NOT EXISTS schools(id INTEGER PRIMARY KEY, name VARCHAR(50), manager_id INTEGER, private INTEGER, join_code VARCHAR(50));`
    );
}