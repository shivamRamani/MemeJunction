import React,{useEffect, useState} from "react";
import {Button,Paper,Grid,Container,Typography} from "@material-ui/core";
import {generateRandomAvatar} from '../../avatar'
import Avatar from 'avataaars';
import Input from './Input'
import { useDispatch } from "react-redux";
import {signin,signup} from '../../actions/auth'
import {useNavigate} from 'react-router-dom'
import useStyles from './styles'
import  Avatarimg  from "./avatar";



const Auth = () => {
    const classes=useStyles();
    const initialState={firstName: '',lastName: '',email: '',password: '',confirmPassword: '',avatar: {}};
    const [isSignin,setIsSingin]=useState(true);
    const [formData,setFormData]=useState(initialState);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [avatar,setAvatar]=useState({});

    
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(JSON.stringify(avatar));
        const va={...formData,avatar: avatar};
        // setFormData({...formData,avatar: avatar});
        console.log(va);
        setFormData(va);
        console.log(formData);
        if(isSignin){
            dispatch(signin(formData,navigate));
        }
        else {
            dispatch(signup(va,navigate));
            
        }

    }
    const handleChange =(event) =>{
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const [com,setCom]=useState();
    const toggleSignIn =() =>{
        setIsSingin((previousState) => !previousState);
    }

    
    const handleAvatar=()=>{
       setAvatar(generateRandomAvatar())
    }
    

    return (
        <>
            <Container className={classes.main}  maxWidth='sm'>
                <Paper className={classes.paper} >
                    {
                        !isSignin &&(
                            <>  
                                <Avatar 
                                    style={{ width: '70px', height: '70px' }}
                                    avatarStyle='Circle'
                                    {...avatar}
                                />
                                <Button onClick={handleAvatar}>Random</Button>
                            </>
                        )
                    }
                    
                    
                    
                    <Typography align="center" variant="h6">{isSignin ? `Sign In` :`Sign Up`}</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={5}>
                            {
                                !isSignin && (
                                    <>
                                        <Input className={classes.input} name="firstName" label="First Name" handleChange={handleChange} half />
                                        <Input className={classes.input} name="lastName" label="Last Name" handleChange={handleChange} half />
                                    </>
                                ) 
                            }
                            <Input className={classes.input} name="email" label="Email" handleChange={handleChange} type='email'/>
                            <Input className={classes.input} name="password" label="Password" handleChange={handleChange} type='password' />
                            {
                                !isSignin &&(
                                    <Input className={classes.input} name="confirmPassword" label="Confirm Password" handleChange={handleChange} type='password' />  
                                )
                            }
                            {
                                isSignin ? (
                                    <>
                                        <Button className={classes.sign_button} type='submit' variant='contained' color="primary">Sign In</Button>
                                        <Button className={classes.toggle} fullWidth onClick={toggleSignIn} >Create a New Accout</Button>
                                    </>
                                ) : (
                                    <>
                                        <Button className={classes.sign_button} type='submit' align='center'  variant='contained' color="primary">Sign Up</Button>
                                        <Button className={classes.toggle}  onClick={toggleSignIn} >Already Have a Accout</Button>  
                                    </>
                                )
                    
                            }

                        </Grid>
                            
                    </form>
                </Paper>
                
            </Container> 
        </>
    )
    
};

export default Auth;
