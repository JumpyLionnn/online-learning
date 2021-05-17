async function addSchoolMemberItem (schoolId: number, userId: number, timeJoined: number) {
    await db.run("INSERT INTO school_members(school_id, user_id, time_joined) VALUES (?, ?, ?);", [schoolId, userId, timeJoined]);
}