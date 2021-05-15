async function register (req: ExpressRequest, res: ExpressResponse){
    console.log("register");
    const data = req.body;

    let firstName: string;
    if(typeof data.firstName === "string"){
        firstName = data.firstName;
        if(firstName.length > 50){
            res.status(400).json({
                "message": "Your first name is too long."
            });
            return;
        }
    }
    else{
        res.status(400).json({
            "message": "Your first name is not valid."
        });
        return;
    }

    let lastName: string;
    if(typeof data.lastName === "string"){
        lastName = data.lastName;
        if(lastName.length > 50){
            res.status(400).json({
                "message": "Your last name is too long."
            });
            return;
        }
    }
    else{
        res.status(400).json({
            "message": "Your last name is not valid."
        });
        return;
    }

    let email: string;
    if(typeof data.email === "string"){
        email = data.email;
        if(!isValidEmail(email)){
            res.status(400).json({
                "message": "Your email is not valid."
            });
            return;
        }
    }
    else{
        res.status(400).json({
            "message": "Your email is not valid."
        });
        return;
    }

    let password: string;
    if(typeof data.password === "string"){
        password = data.password;
        if(!isValidPassword(password)){
            res.status(400).json({
                "message": "Your password is not valid."
            });
            return;
        }
        if(password.length < 5){
            res.status(400).json({
                "message": "Your password is too short."
            });
            return;
        }
    }
    else{
        res.status(400).json({
            "message": "Your password is not valid."
        });
        return;
    }

    let userType: string;
    if(typeof data.userType === "string"){
        userType = data.userType;
        if(userType !== "student" && userType !== "teacher" && userType !== "parent"){
            res.status(400).json({
                "message": "Your user type is not valid."
            });
            return;
        }
    }
    else{
        res.status(400).json({
            "message": "Your user type is not valid."
        });
        return;
    }

    if(await doesEmailExist(email)){
        res.status(400).json({
            "message": "This email is already in use."
        });
        return;
    }
    try {
        await addNewUserItem(firstName, lastName, email, await bcrypt.hash(password, 10), userType);
        res.redirect("/login");
    } catch (error) {
        res.status(500).send();
    }
}