import React ,{ useEffect} from "react";

import {Container ,AppBar, Typography, Grow,Grid} from '@material-ui/core'
import logo from './images/MemeLogo.png'
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles"
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'

// let posts = store.posts;


function App() {
  const classes=useStyles();
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  


  return (
    <Container maxWidth='lg' className="App">
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Typography className={classes.title} variant="h2" align="center" >
            Meme Junction
        </Typography>
        <img className={classes.logo} src={logo} alt="appLogo" height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>


      </Grow>

    </Container>
  );
}

export default App;
