import jwt  from "jsonwebtoken";

export const auth = async (req,res,next) =>{

    try{
        // console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];

        if(token){
            let decoded = jwt.verify(token,'test');
            req.userId = decoded?.id;
            console.log(req.userId);
        }
        next();

    }
    catch(error){
        console.log(error);
    }

}
