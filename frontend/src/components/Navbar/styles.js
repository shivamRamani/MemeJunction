import {  makeStyles } from "@material-ui/core";

export default makeStyles(()=>{
    return {
        appBar:{
            // borderRadius: '5px',
            margin: '0px 0px 20px 0px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#80ffdb',
            position: '-webkit-sticky',
            position: 'sticky',
            top: '0',
            boxShadow: '0px 3px  black',
            
            

        },
        logo :{
            
            marginLeft:'15px',
            marginRight:'15px',
            height: '60px',
            display: 'none'
        },
        title:{
            color: 'black',
            fontSize: 'min(6vw,55px)',
            fontWeight: '400',
            textDecoration: 'none',
            maxWidth: '300px',
            textShadow: '3px 3px #ACB5B3',
            fontFamily: 'Kdam Thmor Pro',
            "@media (max-width: 706px)": {
                fontSize: '6vw',
              }
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
            width: '100%',
            margin: '0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',


        },
        avatar:{
            marginRight: '6px',
            boxShadow: '3px 3px black',
            "@media (max-width: 706px)": {
                height: '30px',
                width: '30px',
              }
        },
        button: {
            border: '2px dashed black',
            boxShadow: '3px 3px black',
            display: 'ruby',
            "@media (max-width: 706px)": {
                fontSize: '0.6em'
              }

        },
        name: {
            fontFamily: 'Kdam Thmor Pro',
            paddingLeft:  '5px',

            "@media (max-width: 706px)": {
                fontSize: '0.8125rem',
              }
        },
        signin: {

            backgroundColor: '#6b6b6b',
            border: '3px solid black',
            boxShadow: '3px 3px black',
            display: 'ruby',

            "@media (max-width: 706px)": {
                padding: '4px 10px',
                fontSize: '0.8125rem',
              }
        }
    }
})