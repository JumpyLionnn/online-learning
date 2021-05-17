async function initializeDatabase (){
    await createUsersTable();
    await createOnlineUsersTable();
    await resetOnlineUsersTable();
    await createSchoolsTable();
    await createClassroomsTable();
    await createSchoolMembersTable();
}