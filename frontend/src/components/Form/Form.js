import { TextField, Button, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { store } from "../../app/store";
import {useDispatch,useSelector } from "react-redux"
import {createPost,updateCurrPost,selectCurrId} from "../../actions/posts"
// import { fetchPosts} from "../../api";

function Form() {
    let currentId =useSelector(state=>state.currentId);
    const posts=useSelector(state=>state.posts);
    const postToBeUpdated = currentId ? posts.find((p)=>p._id===currentId): null;
    const [postData, setPostData] = useState({
        name: "",
        caption: "",
        selectedFile: "",
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch=useDispatch();

    useEffect(()=>{
        if(postToBeUpdated) setPostData(postToBeUpdated)
    },[postToBeUpdated])


    const handleSubmit = (event) => {
        event.preventDefault();
        if(currentId){
            dispatch(updateCurrPost(currentId,postData));
        }
        else{
            dispatch(createPost(postData));
        }
        clearForm();
    };
    
    const clearForm = ()=>{
        // event.preventDefault();
        dispatch(selectCurrId(null));
        setPostData({
            name: "",
            caption: "",
            selectedFile: "",
        })
    }

    if(!user){

        return (
            <Paper>
                <Typography varient='h4' align='center'>
                    Please loging to creat and like posts
                </Typography>
            </Paper>
        )

    }
    

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h4">{!currentId? 'Creat a New Meme':'Edit Meme'}</Typography>
                <TextField
                    variant="outlined"
                    label="Name"
                    fullWidth
                    value={postData.name}
                    onChange={(event) =>
                        setPostData({
                            ...postData,
                            name: event.target.value,
                        })
                    }
                ></TextField>
                <TextField
                    variant="outlined"
                    label="Caption"
                    fullWidth
                    value={postData.caption}
                    onChange={(event) =>
                        setPostData({
                            ...postData,
                            caption: event.target.value,
                        })
                    }
                ></TextField>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        name = {postData.selectedFile}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button varient="constined" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button onClick={clearForm} varient="constined" color="secondary" size="large" fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
