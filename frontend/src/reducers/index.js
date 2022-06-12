import { combineReducers } from "redux";
import {postsReducer,currentIdReducer} from './posts'
import { authReducer } from "./auth";


export default combineReducers({
    posts: postsReducer,
    currentId: currentIdReducer,
    auth: authReducer
})