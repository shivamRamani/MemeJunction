import { FormHelperText, makeStyles } from "@material-ui/core";

export default makeStyles(()=>{
    return {
        appBar:{
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#efefef'
        },
        logo :{
            marginLeft:'15px'
        },
        title:{
            color: '#F73D93',
            fontWeight: '400',
            textTransform: 'lowercase'
        }
    }
})