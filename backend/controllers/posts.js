import { json } from 'express';
import { Post } from '../Models/Post.js';

export const getPosts= async (req,res)=>{
    
    try {
        let allPosts =  await Post.find({});
        console.log('H/ello');

        res.status(200).json(allPosts);

    } catch (error) {
        res.status(409).json(error.massage);
    }
    
}

export const postMeme = async (req,res)=>{
    console.log("this mre post data" + JSON.stringify(req.body));

    let post = req.body;
    let newPost = new Post(post);

    try {
        await newPost.save().then(()=>console.log("added to db"));
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error);
    }

}

export const updatePost = async (req,res)=>{
    const {id : _id} =req.params;
    const post = req.body;

    try {
        const updatedPost= await Post.findByIdAndUpdate(_id,{...post,_id},{new:true});
        if(!updatedPost){
            res.status(404).massage('No Post Found');
        }
        else {
            // console.log(updatedPost);
            res.status(200).json(updatedPost);
        }
    } catch (error) {
        res.status(409).json(error.massage);
    }
}

export const deletePost =async(req,res)=>{
    const {id: _id} = req.params;

    try {
        
        const deletedPost= await Post.findByIdAndDelete(_id,{new:true});

        if(!deletedPost){
            console.log(deletedPost);
            res.status(404).json('No Post Found');
        }
        else {
            res.status(200).json(deletedPost);
        }
    } catch (error) {
        res.status(408).json(error.massage);
    } 
}

export const likePost = async (req,res) =>{
    const {id: _id} = req.params;
    // console.log(_id);
    try {
        const oldPost = await Post.findById(_id);
        const updatedPost = await Post.findByIdAndUpdate(_id,{likes: oldPost.likes+1},{new: true});
        res.status(200).json(updatedPost);
        
    } catch (error) {
        res.status(409).json(error);
        
    }
}



