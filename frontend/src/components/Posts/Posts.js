import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

function Posts() {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    // let AllPosts = () => {
    //     return posts.map((post) => {
    //         <Grid item key={post._id} xs={12} sm={6}>
    //             <Post post={post} />
    //         </Grid>;
    //     });
    // };

    return (
        <>
            {
            posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={6}>
                  <Post post={post} />
                </Grid>
              ))
            }
        </>
    )
}

export default Posts;
