async function createNewSchool (req: ExpressRequest, res: ExpressResponse) {
    const data = req.body;
    let name: string;
    if(typeof data.name === "string") {
        name = data.name;
        if(name.length > 30){
            res.status(400).json({
                "message": "The schools name is too long"
            });
            return;
        }
    }
    else{
        res.status(400).json({
            "message": "The schools name is valid"
        });
        return;
    }

    const user = await getUserById(req.payload.id as number);
    if(!user){
        res.status(400).json({
            "message": "The user doea not exist"
        });
        return;
    }
    if(user.type !== "teacher"){
        res.status(400).json({
            "message": "You can not create a school as a student"
        });
        return;
    }
    const userSchools = await getSchoolsByManagerId(user.id);
    if(userSchools.length === 3){
        res.status(400).json({
            "message": "You can not create more than three schools"
        });
        return;
    }
    let found = false;
    for(let i = 0; i < userSchools.length; i++) {
        if (userSchools[i].name === name) {
            found = true;
            break;
        }
    }
    if(found){
        res.status(400).json({
            "message": "You can not create more than one school with the same name"
        });
        return;
    }
    let code = generateCode(10);
    while(await getSchoolByJoinCode(code)){
        code = generateCode(10);
    }
    await addNewSchoolItem(name, user.id);
    res.status(200).json({
        "message": "Opened a school succesfully",
        "joinCode": code,
        "name": name,
    });
    return;
}