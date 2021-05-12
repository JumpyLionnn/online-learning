async function authorize (req: ExpressRequest, res: ExpressResponse, next: () => void){
    try {
        if(!(typeof req.headers.authorization === "string")){
            throw "";
        }
        const token = req.headers.authorization.split(" ")[1];
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