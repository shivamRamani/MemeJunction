
import express from "express";
import { signin,signup } from "../controllers/users.js";
import { check } from "express-validator";

const router = express.Router();


router.post('/signup',[
    // check('name','Name is required').not().isEmpty(),
    check('email','Not a valid email').isEmail(),
    check('password','Passward  must be greater than or equal to 6 characters').isLength({min:6}),

],signup);

router.post('/signin',signin);


export default router;
