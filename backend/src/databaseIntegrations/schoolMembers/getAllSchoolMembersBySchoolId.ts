async function getAllSchoolMembersBySchoolId (schoolId: number): Promise<DatabaseSchoolMember[]> {
    return await db.getAll("SELECT * FROM school_members WHERE school_id = ?;", [schoolId])as unknown as DatabaseSchoolMember[];
}