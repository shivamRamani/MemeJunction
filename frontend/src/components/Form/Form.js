import { TextField, Button, Paper, Typography, ButtonGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { store } from "../../app/store";
import {useDispatch,useSelector } from "react-redux"
import {createPost,updateCurrPost,selectCurrId} from "../../actions/posts"
import useStyles from './styles'
// import { fetchPosts} from "../../api";


function Form() {
    const classes=useStyles();
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
            <Paper className={classes.form}>
                <Typography varient='h3' align='center'>
                    Please loging to creat and like posts
                </Typography>
            </Paper>
        )

    }
    

    return (
        <Paper color="#f50057">
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography  align="center"  variant="h4">{!currentId? 'Creat Meme':'Edit Meme'}</Typography>
                <TextField
                    className={classes.textField}
                    variant="filled"
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
                    className={classes.textField}
                    variant="filled"
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
                <div >
                    <FileBase
                        className={classes.filebase}
                        type="file"
                        name='file'
                        id='file'
                        multiple={false}
                        // name = {postData.selectedFile}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                    {/* <input type="file" name="file" id="file" onSubmit={()=>setPostData({ ...postData, selectedFile: base64 })}/>
                    <label for="file">Choose a file</label> */}
                </div>
                <ButtonGroup className={classes.buttons} fullWidth>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button onClick={clearForm} variant="contained" color="secondary" size="large" fullWidth>Clear</Button>

                </ButtonGroup>
            </form>
        </Paper>
    );
}

export default Form;
