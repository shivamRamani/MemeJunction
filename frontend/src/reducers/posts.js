
export const postsReducer=  (posts=[],action) => {
    switch(action.type){

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_POST':
            return [...posts,action.payload];
        case 'UPDATE_POST':
            return posts.map(post=>action.payload._id===post._id?action.payload:post);
        default:
            return posts;

    }
}

export const currentIdReducer = (currentId=null,action) =>{
    switch(action.type){
        case 'SELECT_CURRENT_ID':
            return action.payload;
        default :
            return currentId;
    }
}