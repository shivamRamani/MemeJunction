import * as api from '../api'
import {FETCH_ALL,CREATE_POST,UPDATE_POST,DELETE_POST,LIKE_POST,SELECT_CURRENT_ID} from '../actiontypes/actionType'



export const getPosts = () => async (dispatch) =>{

    try {
        const {data}= await api.fetchPosts();
        // console.log("data "+ data);
        const action= { type: FETCH_ALL, payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error.massage);
    }
} 

export const createPost = (postData) => async (dispatch) =>{
    try {
        const {data}= await api.createPost(postData);
        console.log("creat post data "+ JSON.stringify(data));
        const action= { type: CREATE_POST, payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error.massage);
    }
} 

export const updateCurrPost = (currentId,postData) => async (dispatch) => {
    // console.log(api.updatePost(currentId,postData));

    try {
        console.log('Update curr request '+ currentId,postData);
        const {data} =  await api.updatePost(currentId,postData);
        const action = {type: UPDATE_POST,payload: data};
        dispatch(action);
        
    } catch (error) {
        console.log("ERROR!!")
        console.log(error.massage);
    
    }
}

export const deletePost = (id) => async (dispatch) =>{
    console.log('Delete');
    try {
        await api.deletePost(id);
        const action = {type: DELETE_POST,payload: id};
        dispatch(action); 
    } catch (error) {
        console.log("ERROR!!")
        console.log(error.massage);
    }
}

export const likePost =(id) => async(dispatch)=>{
    try {
        const { data } = await api.likePost(id);
        const action = {type: LIKE_POST,payload: data};
        dispatch(action);
    } catch (error) {
        console.log("ERROR!!")
        console.log(error.massage);
        
    }
}


export const selectCurrId = (currentId) =>(dispatch) =>{
    console.log(currentId);
    const action = {type: SELECT_CURRENT_ID,payload: currentId};
     dispatch(action);
}