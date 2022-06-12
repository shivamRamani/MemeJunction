import express from "express";
import {getPosts,postMeme,updatePost,deletePost,likePost} from "../controllers/posts.js"
import { auth } from "../middleware/auth.js";

const router = express.Router();


router.get('/',getPosts);
router.post('/',auth,postMeme);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;