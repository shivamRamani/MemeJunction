import * as api from '../api'

export const getPosts = () => async (dispatch) =>{

    try {
        const {data}= await api.fetchPosts();
        // console.log("data "+ data);
        const action= { type: 'FETCH_ALL', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error.massage);
    }
} 

export const createPost = (postData) => async (dispatch) =>{
    try {
        const {data}= await api.createPost(postData);
        console.log("creat post data "+ JSON.stringify(data));
        const action= { type: 'CREATE_POST', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error.massage);
    }
} 
