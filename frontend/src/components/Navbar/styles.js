import {  makeStyles } from "@material-ui/core";

export default makeStyles(()=>{
    return {
        appBar:{
            // borderRadius: '5px',
            margin: '20px 0',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#80ffdb',
            position: '-webkit-sticky',
            position: 'sticky',
            top: '0',

            // border: '2px solid black',
            boxShadow: '0px 3px  black',
        

        },
        logo :{

            marginLeft:'15px',
            marginRight:'15px',
            
        },
        title:{
            color: 'black',
            fontSize: 'min(8vw,55px)',
            fontWeight: '400',
            textDecoration: 'none',
            maxWidth: '300px',
            textShadow: '3px 3px #ACB5B3',
            fontFamily: 'Kdam Thmor Pro'
        },
        toolbar:{
            margin: '8px',
            flex: '2',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '300px',
            fontFamily: 'Kdam Thmor Pro'

        },
        user:{
            width: '200%',
            margin: '8px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

        },
        avatar:{
            marginRight: '5px',
            boxShadow: '3px 3px black',
            
        },
        button: {
            border: '2px dashed black',
            boxShadow: '3px 3px black',
        },
        name: {
            fontFamily: 'Kdam Thmor Pro'
        },
        signin: {
            backgroundColor: '#6b6b6b',
            border: '3px solid black',
            boxShadow: '3px 3px black',
            
        }
    }
})