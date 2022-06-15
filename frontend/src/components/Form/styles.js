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
            margin: '18px',
            color: 'black',
            justifyContent: 'center',
            backgroundColor: 'white',
            boxShadow: '3px 3px black',
            border: '2px solid black',
            borderRadius: '6px 0px 0px 6px'
        },
        buttons: {
            margin: "0px 8%",
            marginTop: '10px',
            width: '80%',
            boxShadow: '4px 4px black',
            border: '2px solid black',
            borderRadius: '5px',
        },
        filebase: {
        }

    }
})
