import {  Button, Paper, Typography, ButtonGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {useDispatch,useSelector } from "react-redux"
import {createPost,updateCurrPost,selectCurrId} from "../../actions/posts"
import useStyles from './styles'


function Form() {
    const classes=useStyles();
    let currentId =useSelector(state=>state.currentId);
    const posts=useSelector(state=>state.posts);
    const [imgName,setImgname]=useState('Choose a Image');    
    const postToBeUpdated = currentId ? posts.find((p)=>p._id===currentId): null;
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch=useDispatch();
    const [postData, setPostData] = useState({
        name: "",
        caption: "",
        selectedFile: "",
    });

    useEffect(()=>{
        if(user){
             setPostData({...postData,name: user.result.name})
        }
    },[])


    useEffect(()=>{
        if(postToBeUpdated) setPostData(postToBeUpdated)
    },[postToBeUpdated])

    const getBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    }); 

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

    const uploadPhoto = async (e)=>{
        const base64 = await getBase64(e.target.files[0]);
        // console.log(e.target.files[0]);
        setImgname(e.target.files[0].name);
        setPostData({ ...postData, selectedFile: base64 })

    }
    
    const clearForm = ()=>{
        dispatch(selectCurrId(null));
        setImgname("Choose a Image")
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
                    Please log in to create and like posts
                </Typography>
            </Paper>
        )

    }
   
    

    return (
        <Paper color="#f50057">
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography  align="center"  variant="h4">{!currentId? 'Create Meme':'Edit Meme'}</Typography>
                {/* <TextField
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
                ></TextField> */}
                <div className={classes.file_input}>
                    <input  style={{
                        position: 'absolute',
                        height: '50px',
                        width: '100%',
                        opacity: '0',
                        cursor: 'pointer'}} type="file" name="file" id="file" onChange={uploadPhoto}/>
                    <label className={classes.file_input_text} htmlFor="file">{imgName}</label>
                </div>
                <input
                    className={classes.textField}
                    // variant="filled"
                    placeholder='Caption'
                    value={postData.caption}
                    onChange={(event) =>
                        setPostData({
                            ...postData,
                            caption: event.target.value,
                        })
                    }
                ></input>
                <ButtonGroup className={classes.buttons} fullWidth>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button onClick={clearForm} variant="contained" color="secondary" size="large" fullWidth>Clear</Button>

                </ButtonGroup>
            </form>
        </Paper>
    );
}

export default Form;
