async function getAllMemberSchools (userId: number): Promise<DatabaseSchoolRow[]> {
    const schools: DatabaseSchoolRow[] = [];
    const memberSchools: DatabaseSchoolMember[] = await db.getAll("SELECT * FROM school_members WHERE user_id = ?", [userId]) as unknown as DatabaseSchoolMember[];
    for(let i = 0; i < memberSchools.length; i++){
        schools.push(await getSchoolById(memberSchools[i].school_id as number) as unknown as DatabaseSchoolRow);
    }
    return schools;
}