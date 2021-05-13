function getForgotPasswordPage (req: ExpressRequest, res: ExpressResponse){
    res.sendFile(path.resolve(__dirname + "../../../frontend/FPassword.html"));
}