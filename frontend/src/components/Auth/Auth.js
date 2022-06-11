import React,{useState} from "react";
import { Avatar,Button,Paper,Grid,Container,Typography} from "@material-ui/core";
import Input from './Input'


const Auth = () => {
    const [isSignin,setIsSingin]=useState(false);

    const handleSubmit =()=>{

    }
    const handleChange =() =>{
        
    }

    return (
        <>
            <Container component='main' maxWidth='md'>
                <Paper elevation={4}>
                    <Avatar>

                    </Avatar>
                    <Typography variant="h5">{isSignin ? `Sign In` :`Sign Up`}</Typography>
                </Paper>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            !isSignin && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} isPassward={false} half />
                                </>
                            ) 
                        }
                    </Grid>
                </form>
            </Container> 
        </>
    )
    
};

export default Auth;
