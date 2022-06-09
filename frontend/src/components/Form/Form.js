import { TextField, Button, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { store } from "../../app/store";
import {useDispatch} from "react-redux"
import {createPost} from "../../actions/posts"
// import { fetchPosts} from "../../api";

function Form() {
    const [postData, setPostData] = useState({
        name: "",
        caption: "",
        seletedFile: "",
    });
    const dispatch=useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
    };

    const clearForm = (event)=>{
        event.preventDefault();
        // useEffect(()=>{
            // dispatch(fetchPosts());
        // },[dispatch])
        setPostData({
            name: "",
            caption: "",
            seletedFile: "",
        })
    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h4">Creat a New Meme</Typography>
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
                        name = {postData.seletedFile}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, seletedFile: base64 })
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
