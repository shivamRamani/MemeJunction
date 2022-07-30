import * as api from '../api'
import {FETCH_ALL,CREATE_POST,UPDATE_POST,DELETE_POST,LIKE_POST,SELECT_CURRENT_ID} from '../actiontypes/actionType'
import { notify } from '../components/Toast/Toast';


export const getPosts = () => async (dispatch) =>{

    try {
        const {data}= await api.fetchPosts();
        const action= { type: FETCH_ALL, payload: data};
        dispatch(action);
    } catch (error) {
        notify.error("Something went wrong");
    }
} 

export const createPost = (postData) => async (dispatch) =>{
    console.log('hee');
    try {
        const {data}= await api.createPost(postData);
        
        const action= { type: CREATE_POST, payload: data};
        dispatch(action);
    } catch (error) {
        notify.error("Something went wrong");
    }
} 

export const updateCurrPost = (currentId,postData) => async (dispatch) => {
    try {
        console.log('Update curr request '+ currentId,postData);
        const {data} =  await api.updatePost(currentId,postData);
        const action = {type: UPDATE_POST,payload: data};
        dispatch(action);
        
    } catch (error) {
       notify.error("Something went wrong");
    
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try {
        await api.deletePost(id);
        const action = {type: DELETE_POST,payload: id};
        dispatch(action); 
    } catch (error) {
        notify.error("Something went wrong");
    }
}

export const likePost =(id) => async(dispatch)=>{
    try {
        const { data } = await api.likePost(id);
        const action = {type: LIKE_POST,payload: data};
        dispatch(action);
    } catch (error) {
        notify.error("Something went wrong");
        
    }
}


export const selectCurrId = (currentId) =>(dispatch) =>{
    console.log(currentId);
    const action = {type: SELECT_CURRENT_ID,payload: currentId};
     dispatch(action);
}