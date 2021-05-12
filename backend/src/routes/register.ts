async function register (req: ExpressRequest, res: ExpressResponse){
    const data = req.body;

    let username: string;
    if(typeof data.username === "string"){
        username = data.username;
        if(username.length > 50){
            res.status(400).json({
                "message": "Your name is too long."
            });
            return;
        }
    }
    else{
        //socket.emit("register-error", {"message": "Your name not valid."});
        res.status(400).json({
            "message": "Your username is not valid."
        });
        return;
    }

    let email: string;
    if(typeof data.email === "string"){
        email = data.email;
        if(!isValidEmail(email)){
            //socket.emit("register-error", {"message": "Your email is not valid."});
            res.status(400).json({
                "message": "Your email is not valid."
            });
            return;
        }
    }
    else{
        //socket.emit("register-error", {"message": "Your email is not valid."});
        res.status(400).json({
            "message": "Your email is not valid."
        });
        return;
    }

    let password: string;
    if(typeof data.password === "string"){
        password = data.password;
        if(!isValidPassword(password)){
            //socket.emit("register-error", {"message": "Your password is not valid."});
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
        //socket.emit("register-error", {"message": "Your password is not valid."});
        res.status(400).json({
            "message": "Your password is not valid."
        });
        return;
    }

    let userType: string;
    if(typeof data.userType === "string"){
        userType = data.userType;
        if(userType !== "student" && userType !== "teacher" && userType !== "parent"){
            // socket.emit("register-error", {"message": "Your user type is not valid."});
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
        //socket.emit("register-error", {"message": "This email is already in use."});
        res.status(400).json({
            "message": "This email is already in use."
        });
        return;
    }
    try {
        await addNewUserItem(username, email, await bcrypt.hash(password, 10), userType);
        res.json({
            "message": "Registered successfully."
        });
    } catch (error) {
        res.status(500).send();
    }
}