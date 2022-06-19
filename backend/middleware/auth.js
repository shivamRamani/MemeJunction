import jwt  from "jsonwebtoken";

export const auth = async (req,res,next) =>{

    try{
        // console.log("SECRET_ket "+ process.env.SECRET_KEY);
        const token = req.headers.authorization.split(" ")[1];

        if(token){
            let decoded = jwt.verify(token,process.env.SECRET_KEY);
            req.userId = decoded?.id;
            console.log(req.userId);
        }
        next();

    }
    catch(error){
        console.log(error);
    }

}
