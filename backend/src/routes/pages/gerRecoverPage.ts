function gerRecoverPage (req: ExpressRequest, res: ExpressResponse){
    res.sendFile(path.resolve(__dirname + "../../../frontend/recover.html"));
}