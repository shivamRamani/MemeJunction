import React, { useEffect, useState} from "react";
import {classes} from "./styles"
import { useDispatch } from "react-redux";
import { Link,useNavigate,useLocation} from "react-router-dom";
import logo from '../../images/MemeLogo.png'
import { getPosts } from "../../actions/posts";
import Avatar from 'avataaars'

import { AppBar,Toolbar, Typography,Button } from '@mui/material';




function Navbar(){
    // const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const location=useLocation();
    const dispatch=useDispatch();
    const navigate= useNavigate();
    useEffect(()=>{
        
            setUser(JSON.parse(localStorage.getItem('profile')));
       
    },[location])

    const logout=()=>{
        dispatch({type: 'LOGOUT'});
        dispatch(getPosts());
        navigate('/')
        setUser(null);
    }


    return (
        <>
        <AppBar color='inherit' sx={classes.appBar}>
            <div >
                <Typography sx={classes.title} component={Link} to='/' variant="h2" align="center" >MEME JUNCTION</Typography>
            </div>
            <Toolbar sx={classes.toolbar}>
                {
                    user 
                    ?
                    (   
                        <div style={classes.user}>
                            <Avatar style={classes.avatar}
                                avatarStyle='Circle'
                                {...user.result.avatar}
                            />
                            <Typography varient='h5' sx={classes.name} >{user.result.name}</Typography>
                            <Button sx={classes.button} size="small" variant='contained' color='secondary' onClick={logout}>Log out</Button>
                        </div>

                    )
                    :
                    (
                        <Button size='large' sx={classes.signin} component={Link} to='/auth' variant="contained" color='primary' >Sign In</Button>
                    )
                }
            </Toolbar>
      </AppBar>
        </>
    )
}

export default Navbar;
