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
            "message": "You can not open a school as a student"
        });
        return;
    }
    await addNewSchoolItem(name, user.id);
    res.status(200).json({
        "message": "Opened a school succesfully"
    });
    return;
}