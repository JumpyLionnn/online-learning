function getHomePage (req: ExpressRequest, res: ExpressResponse){
    res.sendFile(path.resolve(__dirname + "../../../frontend/index.html"));
}