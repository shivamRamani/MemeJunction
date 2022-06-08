import { TextField, Button, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import {fetchAll,create} from '../../features/postSlice'

function Form() {
    const [postData, setPostData] = useState({
        caption: "",
        seletedFile: "",
    });
    const dispatch=useDispatch();
    const handleSubmit = (postData) => {
        dispatch(create(postData));
    };
    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h4">Creat a New Meme</Typography>
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
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, seletedFile: base64 })
                        }
                    />
                </div>
                <Button varient="constined" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;
