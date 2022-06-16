import React,{useState} from "react";
import { Avatar,Button,Paper,Grid,Container,Typography} from "@material-ui/core";
import Input from './Input'
import { useDispatch } from "react-redux";
import {signin,signup} from '../../actions/auth'
import {useNavigate} from 'react-router-dom'
import useStyles from './styles'

const Auth = () => {
    const classes=useStyles();
    const initialState={firstName: '',lastName: '',email: '',password: '',confirmPassword: ''};
    const [isSignin,setIsSingin]=useState(true);
    const [formData,setFormData]=useState(initialState);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        
        if(isSignin){
            dispatch(signin(formData,navigate));
        }
        else {
            dispatch(signup(formData,navigate));
            
        }

        console.log(formData);
    }
    const handleChange =(event) =>{
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const toggleSignIn =() =>{
        setIsSingin((previousState) => !previousState);
    }

    return (
        <>
            <Container className={classes.main}  maxWidth='sm'>
                <Paper className={classes.paper} >
                    <Avatar >
                    </Avatar >
                    <Typography align="center" variant="h5">{isSignin ? `Sign In` :`Sign Up`}</Typography>
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
                                        <Button type='submit' align='center' fullWidth variant='contained' color="primary">Sign Up</Button>
                                        <Button className={classes.toggle} fullWidth onClick={toggleSignIn} >Already Have a Accout</Button>  
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
