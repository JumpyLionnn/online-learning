function getRegisterPage (req: ExpressRequest, res: ExpressResponse){
    res.sendFile(path.resolve(__dirname + "../../../frontend/Register.html"));
}