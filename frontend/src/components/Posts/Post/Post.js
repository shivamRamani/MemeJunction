import React, { useState,useEffect } from "react";

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EditIcon from "@mui/icons-material/Edit";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrId,
    deletePost,
    likePost,
    getPosts,
} from "../../../actions/posts";

function Post(props) {
    // console.log(props);
    // const [likes,setLikes] = useState(props.post.likes);

    let { _id, name, caption, selectedFile,likes,creatorId} = props.post;
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    // const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));

    // useEffect(() => {
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [JSON.parse(localStorage.getItem('profile'))]);
    

    // const [authorized,setAuth] = useState((user && user.result._id==creatorId));

    const selectId = () => {
        dispatch(selectCurrId(_id));
    };
    const onLikeClick = () => {
        dispatch(likePost(_id));
 
    };
    if(user){
        console.log(user.result._id);
        console.log(creatorId);

    }
    
    let authorized = (user && user.result._id==creatorId);
    console.log(authorized);
    
    return (
        <>
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    component="img"
                    alt="MemeImage"
                    height="140"
                    image={selectedFile}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="secondary">
                        {caption}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onLikeClick}>
                        <ThumbUpIcon fontSize="small">' '</ThumbUpIcon>
                        {likes.length ? `${likes.length} ${likes.length===1? 'Like' : 'Likes'}` : ' '}
                        {}
                    </Button>
                    {
                        authorized ? (
                            <>
                                <Button size="small" onClick={selectId}>
                                    <EditIcon fontSize="small">' '</EditIcon>
                                     Edit
                                </Button>
                                <Button
                                    size="small"
                                    onClick={() => dispatch(deletePost(_id))}
                                        >
                                    <DeleteIcon fontSize="small">' '</DeleteIcon>
                                     Delete
                                </Button>
                            </>
                        )
                        : (
                            <>
                            </>
                        )
                    }
                    
                </CardActions>
            </Card>
        </>
    );
}

export default Post;
