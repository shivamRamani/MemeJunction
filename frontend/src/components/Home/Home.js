import React,{useEffect} from 'react'
import {Container ,AppBar, Typography, Grow,Grid} from '@material-ui/core'
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import {useDispatch,useSelector} from 'react-redux'
import {getPosts } from '../../actions/posts'

 function Home() {
    // const classes=useStyles();
    const dispatch=useDispatch();
    const currentId= useSelector(state=>state.currentId)
    useEffect(() => {
        dispatch(getPosts());
     }, [dispatch])
  return (
    <>
        <Grow in>
        <Container >
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={12}>
              <Form />
            </Grid>
            <Grid   container xs={12} sm={12}>
              <Posts />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default Home
