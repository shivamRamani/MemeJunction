import { makeStyles } from "@material-ui/core";


export default makeStyles(()=>{

    return {
        
        main: {

            // height: '40vh'  

        },
        paper: {
            display: 'flex',
            alignItems: 'center',
            flexDirection:'column',
            padding: '20px',
            borderRadius: '15px',
            border: '3px solid black',
            boxShadow: '8px 8px 0px -3px  black',
            backgroundColor: '#fac185',
        },
        textfield: {
            height: '80%',
            margin: '3%',
            width: 'calc(100% - 2px)',
            // marginBottom: '0px',
            fontSize: 'medium',
            color: 'black',
            justifyContent: 'center',
            backgroundColor: 'white',
            boxShadow: '3px 3px black',
            border: '3px solid black',
            borderRadius: '6px 0px 0px 6px',
            "@media (max-width: 572px)": {
                margin: '0px',
                borderRadius: '4px',
                height: '120%',
            },
            
            
        },
        sign_button: {
            width: '80%',
            margin: '0px 10%',
            boxShadow: '3px 3px black',
            border: '3px solid black',
            borderRadius: '6px',
            "@media (max-width: 572px)": {
                fontSize: 'small'
            }
        },
        toggle: {
            width: '60%',
            margin: '4% 20%',
            boxShadow: '3px 3px black',
            border: '2px solid black',
            borderRadius: '6px',
            // display: 'ruby',
            fontSize: '1em',
            overflow: 'hidden',
            maxHeight: '50px',
            
            "@media (max-width: 572px)": {
                fontSize: 'xx-small'
            }

        },
        random: {

            width: '60%',
            margin: '2px 20%',
            boxShadow: '2px 2px black',
            border: '3px solid black',
            borderRadius: '6px',
            "@media (max-width: 572px)": {
                
                fontSize: '2vw',
                marginBottom: '4px'
            }


        },
        avatar: {
            height :'65px',
            width: '65px',

            "@media (max-width: 572px)":{
                height: '50px',
                width: '50px',
            }
        }

        


    }


})