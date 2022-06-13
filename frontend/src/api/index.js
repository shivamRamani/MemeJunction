import axios from "axios";

const url = "http://localhost:5000";

const API = axios.create({baseURL: url})

API.interceptors.request.use((req)=>{
    const profile=JSON.parse(localStorage.getItem('profile'));
    if(profile){
        // console.log('tokern ' + JSON.parse(localStorage.getItem('profile')).token);
        req.headers.authorization= `Bearer ${(profile.token)}`;
    }
    return req;
})


export const fetchPosts = ()=>{
    const response = API.get('/posts');
    return response;
};

export const createPost = (postData)=>{
    console.log("response data is : " + postData);
    const response = API.post('/posts',postData);
    return response;
};

export const updatePost =(id,postData) =>{
    console.log('This is update post data'+ JSON.stringify(postData))
    const response = API.patch(`/posts/${id}`,postData);
    return response;
}

export const deletePost = (id) =>{
    console.log('This is update post data'+ JSON.stringify(id))
    const response = API.delete(`/posts/${id}`);
    return response;
}

export const likePost = (id) =>{
    const response = API.patch(`/posts/${id}/likePost`,id);
    return response;
}

export const signin = (formData) =>{
    const response = API.post('users/signin',formData);
    return response;
}

export const signup = (formData) =>{
    const response = API.post('users/signup',formData);
    return response;
}