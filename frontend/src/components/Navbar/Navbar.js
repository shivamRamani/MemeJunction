import React, { useEffect, useState} from "react";
import useStyles from "./styles"
import { useDispatch } from "react-redux";
import { Link,useNavigate,useLocation} from "react-router-dom";
import {AppBar, Toolbar, Typography,Button,Avatar} from '@material-ui/core'
import logo from '../../images/MemeLogo.png'
import { getPosts } from "../../actions/posts";
import { color } from "@mui/system";

function Navbar(){
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const location=useLocation();
    const dispatch=useDispatch();
    const navigate= useNavigate();
    useEffect(()=>{
        // if(user){
            const token = user && user.token;
            // console.log(localStorage.getItem('profile'));
            setUser(JSON.parse(localStorage.getItem('profile')));
        // }
    },[location])

    const logout=()=>{
        dispatch({type: 'LOGOUT'});
        dispatch(getPosts());
        navigate('/')
        setUser(null);
    }
    // console.log('USer' + JSON.stringify(user));
    return (
        <>
        <AppBar  className={classes.appBar} color="inherit">
            <div >
                <img className={classes.logo} src={logo} alt="appLogo" height='60' />
                <Typography className={classes.title} component={Link} to='/' variant="h2" align="center" >MEME JUNCTION</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user 
                    ?
                    (   
                        <div className={classes.user}>
                            <Avatar className={classes.avatar}/>
                            <Typography className={classes.name} varient='h5'>{user.result.name}</Typography>
                            <Button className={classes.button} size="small" variant='contained' color='secondary' onClick={logout}>Logout</Button>
                        </div>

                    )
                    :
                    (
                        <Button size='large' className={classes.signin} component={Link} to='/auth' variant="contained" color='primary'>Sign In</Button>
                    )
                }
            </Toolbar>
      </AppBar>
        </>
    )
}

export default Navbar;
