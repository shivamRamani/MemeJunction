import axios from "axios";
import thunk from "redux-thunk";

const url = "http://localhost:5000/posts";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = ()=>{
    const response = axios.get(url);
    
    return response;
};

export const createPost = (postData)=>{
    console.log("response data is : " + postData);
    const response = axios.post(url,postData);
    return response;
};

export const updatePost =(id,postData) =>{
    console.log('This is update post data'+ JSON.stringify(postData))
    const response = axios.patch(`${url}/${id}`,postData);
    return response;
}

export const deletePost = (id) =>{
    console.log('This is update post data'+ JSON.stringify(id))
    const response = axios.delete(`${url}/${id}`);
    return response;
}

export const likePost = (id) =>{
    const response = axios.patch(`${url}/${id}/likePost`,id);
    return response;
}