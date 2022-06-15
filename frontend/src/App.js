import React ,{ useEffect} from "react";

import {Container ,AppBar, Typography, Grow,Grid} from '@material-ui/core'
import useStyles from "./styles"
import {useDispatch,useSelector} from 'react-redux'
import {getPosts} from './actions/posts'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

function App() {
  
  const nav={
    position:'sticky',
    top: '0'
  }

  return (
    <BrowserRouter>
        <Container maxWidth='lg' className="App">
          <Navbar />
            <Routes >
              <Route exact path='/' element={<Home />} />
              <Route exact path='/auth' element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
