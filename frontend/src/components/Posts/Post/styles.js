import { makeStyles } from "@material-ui/core";
import { margin, maxHeight } from "@mui/system";

export default makeStyles(()=>{
    return {
        card: {
            margin: '30px',
            borderRadius: '10px',
            // backgroundColor: '#c9c9c9',
            border: '3px solid black',
            boxShadow: '5px 8px black'
        },
        image:{
            margin: '4px',
            objectFit: 'contain',
            maxHeight:'400px',
            display: 'inline'

        },
        content: {
            backgroundColor: '#FFFC60',
            // boxShadow: '0 8px 6px black',
            borderBottom: '3px dotted black'
            // margin: '10px'
        },
        actions: {
            borderTop: '3px dotted black',
            backgroundColor: '#8686ff',
        }   
    }
})