function getDashboardPage (req: ExpressRequest, res: ExpressResponse){
    res.sendFile(__dirname + "../../../frontend/dashboard.html");
}