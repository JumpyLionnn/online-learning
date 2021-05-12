async function login (req: ExpressRequest, res: ExpressResponse){
    const data = req.body;

    const errorMessage = "The email or the password are incorrect.";

    let email: string;
    if(typeof data.email === "string"){
        email = data.email;
    }
    else{
        res.status(400).json({
            "message": errorMessage
        });
        return;
    }

    let password: string;
    if(typeof data.password === "string"){
        password = data.password;
    }
    else{
        res.status(400).json({
            "message": errorMessage
        });
        return;
    }

    const user = await getUserByEmail(email);
    if(!user){
        res.status(400).json({
            "message": errorMessage
        });
        return;
    }
    try{
        if(await bcrypt.compare(password, user.password)){
            const token = await jwt.sign({
                "id": user.id
            }, process.env.SECRET);
            res.json({
                "message": "logged in successfully",
                "token": token
            });
        } else{
            res.status(400).json({
                "message": errorMessage
            });
        }
    }
    catch(e){
        res.status(500).send();
    }
}