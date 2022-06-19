import { makeStyles } from "@material-ui/core";
// import { display } from "@mui/system";

export default makeStyles(()=>{
    return {

        form:{
            padding: '20px',
            marginTop: '30px',
            boxShadow: '5px 4px black',
            backgroundColor: '#fac185',
            border: '3px solid black',
            borderRadius: '6px'
            // display: 'flex'
        },
        textField: {
            display: 'block',
            height: '50px',
            margin: 'auto',
            width: 'calc(80%)',
            fontSize: 'medium',
            backgroundColor: 'white',
            boxShadow: '3px 3px black',
            border: '3px solid black',
            borderRadius: '5px',
            
        },
        buttons: {
            margin: "0px 10%",
            marginTop: '20px',
            width: '80%',
            boxShadow: '4px 4px black',
            border: '2px solid black',
            borderRadius: '5px',
        },
        file_input: {
            position: 'relative',
            border: '3px solid black',
            height: '50px',
            margin: '20px 10%',
            width: '80%',
            cursor: 'pointer',
            boxShadow: '3px 3px black',
            borderRadius: '5px',
        },
        file_input_text: {
            fontSize: '100%',
            textAlign: 'center',
            display: 'block ruby',
            overflow: 'auto',
            margin: '10px 0px'
        }

    }
})
