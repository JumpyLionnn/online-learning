async function createSchoolMembersTable () {
    await db.run(`
        CREATE TABLE IF NOT EXISTS school_members(school_id INTEGER, user_id INTEGER, time_joined INTEGER);
    `);
}