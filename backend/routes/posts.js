import express from "express";
import {getPosts,postMeme,updatePost} from "../controllers/posts.js"

const router = express.Router();


router.get('/',getPosts);
router.post('/',postMeme);
router.patch('/:id',updatePost)

export default router;