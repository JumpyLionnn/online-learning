async function register (req: ExpressRequest, res: ExpressResponse){
    console.log("register");
    const data = req.body;

    data.alertClass = "alert-danger";

    let firstName: string;
    if(typeof data.firstName === "string"){
        firstName = data.firstName;
        if(firstName.length > 50){
            data.message = "Your first name is too long.";
            res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
            return;
        }
    }
    else{
        data.message = "Your first name is not valid.";
        res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
        return;
    }

    let lastName: string;
    if(typeof data.lastName === "string"){
        lastName = data.lastName;
        if(lastName.length > 50){
            data.message = "Your last name is too long.";
            res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
            return;
        }
    }
    else{
        data.message = "Your last name is not valid.";
        res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
        return;
    }

    let email: string;
    if(typeof data.email === "string"){
        email = data.email;
        if(!isValidEmail(email)){
            data.message = "Your email is not valid.";
            res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
            return;
        }
    }
    else{
        data.message = "Your email is not valid.";
        res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
        return;
    }

    if(await doesEmailExist(email)){
        data.message = "This email is already in use.";
        res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
        return;
    }

    let password: string;
    if(typeof data.password === "string"){
        password = data.password;
        if(!isValidPassword(password)){
            data.message = "Your password is not valid.";
            res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
            return;
        }
        if(password.length < 5){
            data.message = "Your password is too short.";
            res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
            return;
        }
    }
    else{
        data.message = "Your password is not valid.";
        res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
        return;
    }

    let userType: string;
    if(typeof data.userType === "string"){
        userType = data.userType;
        if(userType !== "student" && userType !== "teacher" && userType !== "parent"){
            data.message = "Your user type is not valid.";
            res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
            return;
        }
    }
    else{
        data.message = "Your user type is not valid.";
        res.status(400).send(loadHtml("frontend/Register.html", data as {[name: string]: string}));
        return;
    }
    try {
        await addNewUserItem(firstName, lastName, email, await bcrypt.hash(password, 10), userType);
        res.redirect("/login");
    } catch (error) {
        res.status(500).send();
    }
}