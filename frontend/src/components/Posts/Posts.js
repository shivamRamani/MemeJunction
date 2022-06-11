import React from "react";
import Post from "./Post/Post";
import { useSelector,useEffect } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

function Posts() {
    const posts = useSelector((state) => state.posts);
    // posts.reverse();
    console.log(posts);
    return (
        <>
            {
              !posts.length
              ? 
              <CircularProgress />
              :(
              posts.map((post) => (
                <Grid item key={post._id} xs={12} sm={12}>
                  <Post post={post} />
                </Grid>
              ))
              )
            }
        </>
    )
}

export default Posts;
