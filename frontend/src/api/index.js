import axios from "axios";
import thunk from "redux-thunk";

const url = "http://localhost:5000/posts";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = ()=>{
    const response = axios.get(url);
    
    // console.log("response data is : " + response);
    return response;
};

export const createPost = (postData)=>{
    const response = axios.post(url,postData);
    // console.log("response data is : " + response);
    return response;
};

// export const fetchPosts = createAsyncThunk ('post/fetchPosts',async () => {
//     console.log("fetch happend");

//     try {
//         const response = await axios.get(POSTS_URL); 
//         console.log(response.data);

//         // return response.data
//         return response.data;

//     } catch (error) {
//         console.log(error.massage);
//         return error.massage
//     }
// })

// export const createPost = createAsyncThunk ('post/createPost',async (postData) => {
//     console.log("post happend");
//     try {
//         const response = await axios.post(url, postData); 
//         return response.data
//     } catch (error) {
//         return error.massage
//     }
// })
