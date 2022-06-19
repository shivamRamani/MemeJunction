import {check,validationResult} from "express-validator";
import { User } from "../Models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




export const signup = async (req,res) =>{
    // console.log(req.body);
    const {email,password,confirmPassword,firstName,lastName,avatar} =req.body; 
    // console.log("SECRET_ket "+ process.env.SECRET_KEY);

    try{
        const err=validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({ errors: err.array() });
        }

        const existingUser= await User.findOne({email});


        if(existingUser) {
            console.log("this is a user ",existingUser);
            return res.status(400).json({massage: "User already exist"});
        }

        if(password!=confirmPassword) return res.status(400).json({massage: "Passwords don't match"});

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser= new User({email,name: `${firstName} ${lastName}`,password: hashedPassword,avatar});

        await newUser.save();
        // console.log(JSON.stringify(newUser));
        const token = jwt.sign({email: newUser.email, id: newUser._id},process.env.SECRET_KEY,{expiresIn: "2h"});
        // console.log(token);
        res.status(200).json({result: newUser,token});

    }
    catch(error){
        console.log(error);
        res.status(409).json(error.massage);
    }
}

export const signin = async (req,res)=>{
    const {email,password} =req.body;
    try {
        const existingUser= await User.findOne({email: email});

        if(!existingUser) {
            return res.status(404).json({massage: "User doesn't exist"});
        }

        const isPasswordCorrect= await bcrypt.compare(password,existingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({ massage: 'Invalid Password'});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id},'test',{expiresIn: "2h"});
        res.status(200).json({result: existingUser,token});

    } catch (error) {
        res.status(500).json({massage: 'Something went wrong'});
    }
}