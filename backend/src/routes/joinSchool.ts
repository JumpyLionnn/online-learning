async function joinSchool (req: ExpressRequest, res: ExpressResponse) {
    const data = req.body;

    const user = await getUserById((req.userId as unknown) as number);
    if(!user){
        return;
    }

    let joinCode: string;
    if(typeof data.joinCode === "string"){
        joinCode = data.joinCode;
    }
    else{
        res.status(400).json({
            "success": false,
            "message": "There is no school with this code"
        });
        return;
    }
    const school = await getSchoolByJoinCode(joinCode);
    if(!school){
        res.status(400).json({
            "success": false,
            "message": "There is no school with this code"
        });
        return;
    }

    if(school.private === 1){
        res.status(400).json({
            "success": false,
            "message": "You can not join a private school"
        });
        return;
    }

    if(await getMemberBySchoolIdAndUserId(school.id, user.id)){
        res.status(400).json({
            "success": false,
            "message": "You are already in this school"
        });
        return;
    }


    await addSchoolMemberItem(school.id, user.id, Date.now());
    res.status(200).json({
        "success": true,
        "schoolId": school.id,
        "message": "You successfully joined this school"
    });
    io.to("school-" + school.id).emit("user-joined-school", {
        "firstName": user.first_name,
        "lastName": user.last_name,
        "schoolId": school.id
    });
}