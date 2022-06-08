import { createSlice } from "@reduxjs/toolkit";
import * as api from '../api'


export const postSlice= createSlice({
    name: 'posts',
    reducers:{
        fetchAll: (state,actions)=>{
            return actions.payload;
        },
        create: (state,actions)=>{
            return console.log(actions.payload);
        },
         
    }
})

export const {fetchAll,create}=postSlice.actions
export default postSlice.reducers