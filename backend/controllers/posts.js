import { json } from 'express';
import { Post } from '../Models/Post.js';

export const getPosts= async (req,res)=>{

    try {
        let allPosts =  await Post.find({});
        res.status(200).json(allPosts);
        // console.log('Hello');

    } catch (error) {
        res.status(409).json(error.massage);
    }
    
}

export const postMeme = async (req,res)=>{
    console.log(req.body);

    let post = req.body;
    let newPost = new Post(post);

    try {
        await newPost.save().then(()=>console.log("added to db"));
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error.massage);
    }

}



