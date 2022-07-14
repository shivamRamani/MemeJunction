import React,{useEffect, useState} from "react";

import { generateRandomAvatar } from "../../avatar";
import Avatar from "avataaars";

const Avatarimg = (props) => {
    let img=generateRandomAvatar;
    let [avatarImage,set]=useState(img);

    return (
        <>  
            <div id>

                <Avatar
                    
                    style={{ width: "70px", height: "70px" }}
                    avatarStyle="Circle"
                
                    {...avatarImage}
                />
            </div>
            
        </>
    );
};

export default Avatarimg;
