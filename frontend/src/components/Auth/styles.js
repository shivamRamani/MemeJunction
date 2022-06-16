import { makeStyles } from "@material-ui/core";


export default makeStyles(()=>{

    return {
        
        main: {

            // display: 'flex',

        },
        paper: {
            display: 'flex',
            alignItems: 'center',
            flexDirection:'column',
            padding: '20px',
            borderRadius: '15px',
            border: '3px solid black',
            boxShadow: '10px 10px 0px -3px  black',
            backgroundColor: '#fac185',
        },
        textfield: {
            margin: '3.5%',
            marginBottom: '0px',
            color: 'black',
            justifyContent: 'center',
            backgroundColor: 'white',
            boxShadow: '3px 3px black',
            border: '3px solid black',
            borderRadius: '6px 0px 0px 6px'
        },
        sign_button: {
            width: '80%',
            margin: '0px 10%',
            boxShadow: '3px 3px black',
            border: '3px solid black',
            borderRadius: '6px'
        },
        toggle: {
            width: '60%',
            margin: '4% 20%',
            boxShadow: '3px 3px black',
            border: '2px solid black',
            borderRadius: '6px'
        }


        


    }


})