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
    console.log("this mre post data" + req.body);

    let post = req.body;
    let newPost = new Post(post);

    try {
        await newPost.save().then(()=>console.log("added to db"));
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json(error.massage);
    }

}

export const updatePost = async (req,res)=>{
    console.log('helloldknmgksdjgklsdfjfklgjsdjgjsdlkgjsdkljgklsdfjfgkl');
    const {id : _id} =req.params;
    const post = req.body;
    // console.log(req.body,req.params);

    try {
        console.log('oldPost '+ await Post.findById(_id));
        const updatedPost= await Post.findByIdAndUpdate(_id,{...post,_id},{new:true});
        if(!updatePost){
            res.status(404).massage('No Post Found');
        }
        else {
            console.log(updatedPost);
            res.status(200).json(updatedPost);
        }
    } catch (error) {
        res.status(409).json(error.massage);
    }
}




