async function getMemberBySchoolIdAndUserId (schoolId: number, userId: number) {
    return await db.get("SELECT * FROM school_members WHERE school_id = ? AND user_id = ?;", [schoolId, userId]);
}