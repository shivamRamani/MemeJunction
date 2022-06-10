import { combineReducers } from "redux";
import {postsReducer,currentIdReducer} from './posts'

export default combineReducers({
    posts: postsReducer,
    currentId: currentIdReducer
})