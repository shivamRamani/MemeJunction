import {FETCH_ALL,CREATE_POST,UPDATE_POST,DELETE_POST,LIKE_POST,SELECT_CURRENT_ID} from '../actiontypes/actionType'


export const postsReducer=  (posts=[],action) => {
    switch(action.type){

        case FETCH_ALL:
            return action.payload;
        case CREATE_POST:
            return [action.payload,...posts];
        case UPDATE_POST:
            return posts.map(post=>action.payload._id===post._id?action.payload:post);
        case DELETE_POST:
            return posts.filter(post=>(action.payload!==post._id));
        case LIKE_POST:
            return posts.map(post=>action.payload._id===post._id? action.payload :post);
        default:
            return posts;

    }
}

export const currentIdReducer = (currentId=null,action) =>{
    switch(action.type){
        case SELECT_CURRENT_ID:
            return action.payload;
        default :
            return currentId;
    }
}