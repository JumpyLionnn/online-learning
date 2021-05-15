async function authorize (req: ExpressRequest, res: ExpressResponse, next: () => void){
    try {
        if(!(typeof req.query.authorization === "string")){
            throw "";
        }
        const token = req.query.authorization.split(" ")[1];
        if(!token){
            throw "";
        }
        req.payload = await jwt.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        res.status(401).json({
            "message": "forbidden"
        });
    }
}