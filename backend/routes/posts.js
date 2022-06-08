import express from "express";
import {getPosts,postMeme} from "../controllers/posts.js"

const router = express.Router();


router.get('/',getPosts);
router.post('/',postMeme);


export default router;