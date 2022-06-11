import React, { useState } from "react";

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

    let { _id, name, caption, selectedFile,likes } = props.post;
    console.log(likes);
    const dispatch = useDispatch();
    // const currentId = useSelector((state=> state.currentId));

    const selectId = () => {
        dispatch(selectCurrId(_id));
    };
    const onLikeClick = () => {
        dispatch(likePost(_id));
        // console.log(likes);
        // setLikes(
        //     // likes = likes + 1,
        // );
    };

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
                        {likes ? `${likes} ${likes===1? 'Like' : 'Likes'}` : ' '}
                        {}
                    </Button>
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
                </CardActions>
            </Card>
        </>
    );
}

export default Post;
