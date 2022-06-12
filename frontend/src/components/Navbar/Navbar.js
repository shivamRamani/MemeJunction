import React, { useEffect, useState} from "react";
import useStyles from "../../styles"
import { useDispatch } from "react-redux";
import { Link,useNavigate,useLocation} from "react-router-dom";
import {AppBar, Toolbar, Typography,Button,Avatar} from '@material-ui/core'
import logo from '../../images/MemeLogo.png'
import { color } from "@mui/system";

function Navbar(){
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const location=useLocation();
    const dispatch=useDispatch();
    useEffect(()=>{
        if(user){
            const token = user.token;
            setUser(JSON.parse(localStorage.getItem('profile')));
        }
    },[location])

    const logout=()=>{
        dispatch({type: 'LOGOUT'});
        setUser(null);
    }

    return (
        <>
        <AppBar className={classes.appBar} color="inherit" position="static">
            <div>
                <img className={classes.logo} src={logo} alt="appLogo" height='60' />
                <Typography className={classes.title} component={Link} to='/' variant="h2" align="center" > Meme Junction</Typography>
            </div>
            <Toolbar>
                {
                    user 
                    ?
                    (
                        <div>
                            <Avatar />
                            <Typography varient='h6'>{user.name}</Typography>
                            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
                        </div>

                    )
                    :
                    (
                        <Button component={Link} to='/auth' variant="contained" color='primary'>Sign In</Button>
                    )
                }
            </Toolbar>
      </AppBar>
        </>
    )
}

export default Navbar;
