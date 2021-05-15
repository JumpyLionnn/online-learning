function getRegisterPage (req: ExpressRequest, res: ExpressResponse){
    res.send(loadHtml("frontend/Register.html"));
}