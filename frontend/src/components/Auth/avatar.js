import React,{useEffect, useState} from "react";
// import { ReactDOM } from "react-dom";
import ReactDOM from 'react-dom/client';

import { generateRandomAvatar } from "../../avatar";
import Avatar from "avataaars";
import { Button } from "@material-ui/core";

const Avatarimg = (props) => {
    console.log('id'+ props.i);
    // const [avatar,setAvatar]=useState({});

    // const [to,set]=useState(1);
    

    // useEffect(()=>{
        
    //     setAvatar(<Avatar
    //         style={{ width: "70px", height: "70px" }}
    //         avatarStyle="Circle"
            
    //         {...generateRandomAvatar()}
    //     />)
       


    // },[to])
    


    // const handleAvatar=()=>{
    //     set((prev)=>prev+1);
    // }
    let a=generateRandomAvatar;
    let [av,set]=useState(a);
    console.log({...av});
    // let av=generateRandomAvatar();

    useEffect(()=>{
    //     console.log(props.i)
        set(a())
    },[])



    return (
        <>  
            <div id='hi'>


                <Avatar
                    
                    style={{ width: "70px", height: "70px" }}
                    avatarStyle="Circle"
                
                    {...av}
                />
            </div>
            
            {/* <h5>{JSON.stringify(avatar)}</h5> */}

        </>
    );
};

export default Avatarimg;
