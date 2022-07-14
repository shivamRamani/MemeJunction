import React,{useEffect} from 'react'
import {Container, Grow,Grid} from '@material-ui/core'
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import {useDispatch} from 'react-redux'
import {getPosts } from '../../actions/posts'

 function Home() {
    const dispatch=useDispatch();
    const user = localStorage.getItem('profile');
    useEffect(() => {
        dispatch(getPosts());
     }, [dispatch])
  return (
    <>
        <Grow in>
        <Container >
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} md={4}>
              <Form />
            </Grid>
            <Grid item xs={12} md={8}>
              <Posts user={user}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default Home
