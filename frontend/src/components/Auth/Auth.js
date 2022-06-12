import React,{useState} from "react";
import { Avatar,Button,Paper,Grid,Container,Typography} from "@material-ui/core";
import Input from './Input'
import { useDispatch } from "react-redux";
import {signin,signup} from '../../actions/auth'
import {useNavigate} from 'react-router-dom'

const Auth = () => {
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
            <Container component='main' maxWidth='md'>
                <Paper elevation={4}>
                    <Avatar>

                    </Avatar>
                    <Typography variant="h5">{isSignin ? `Sign In` :`Sign Up`}</Typography>
                </Paper>
                <Paper>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={5}>
                            {
                                !isSignin && (
                                    <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    </>
                                ) 
                            }
                            <Input name="email" label="Email" handleChange={handleChange} type='email'/>
                            <Input name="password" label="Password" handleChange={handleChange} type='password' />
                            {
                                !isSignin &&(
                                    <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type='password' />  
                                )
                            }
                            {
                                isSignin ? (
                                    <>
                                        <Button type='submit' fullWidth variant='contained' color="primary">Sign In</Button>
                                        <Button fullWidth onClick={toggleSignIn} >Creat a New Accout</Button>
                                    </>
                                ) : (
                                    <>
                                        <Button type='submit' fullWidth variant='contained' color="primary">Sign Up</Button>
                                        <Button fullWidth onClick={toggleSignIn} >Already Have a Accout</Button>  
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
