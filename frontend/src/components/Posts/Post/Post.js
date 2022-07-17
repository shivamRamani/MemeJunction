import React from "react";
import useStyles from './styles'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
    selectCurrId,
    deletePost,
    likePost,
} from "../../../actions/posts";

function Post(props) {

    const classes=useStyles();

    let { _id, name, caption, selectedFile,likes,creatorId} = props.post;
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const selectId = () => {
        dispatch(selectCurrId(_id));
    };
    const onLikeClick = () => {
        dispatch(likePost(_id));
 
    };
    
    let authorized = (user && user.result._id===creatorId);
    console.log(authorized);
    
    return (
        <>
            <Card className={classes.card} sx={{margin: '30px',
            borderRadius: '10px',
            
            border: '3px solid black',
            boxShadow: '5px 8px black'}}>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="secondary">
                        {caption}
                    </Typography>
                </CardContent>
                <CardMedia
                    // className={classes.image}
                    
                    component="img"
                    alt="MemeImage"
                    // height="250 "
                    image={selectedFile}
                    sx={{margin: '4px',
                    objectFit: 'contain',
                    maxHeight:'400px',
                    display: 'inline'}}
                />
                
                <CardActions className={classes.actions}>
                    <Button size="small" onClick={onLikeClick} sx={{color: 'black'}}>
                        <ThumbUpIcon fontSize="small">' '</ThumbUpIcon>
                        {likes.length ? `${likes.length} ${likes.length===1? 'Like' : 'Likes'}` : ' '}
                        {}
                    </Button>
                    {
                        authorized ? (
                            <>
                                <Button size="small" onClick={selectId} sx={{color: 'black'}}>
                                    <EditIcon fontSize="small">' '</EditIcon>
                                     Edit
                                </Button>
                                <Button
                                    sx={{color: 'black'}}
                                    size="small"
                                    onClick={() => dispatch(deletePost(_id))}
                                        >
                                    <DeleteIcon fontSize="small" >' '</DeleteIcon>
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
