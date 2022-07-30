import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>{
    return {
        card: {
            
            margin: '20px',
            borderRadius: '10px',
            border: '3px solid black',
            boxShadow: '5px 8px black',

            "@media (max-width: 572px)": {
                margin: '10px',
                // display: 'none'
            },

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