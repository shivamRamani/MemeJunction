import { Grid} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Input = ({name,type,label,half ,handleChange,isPassward}) => {
  const classes= useStyles();
  return (
    <>
        <Grid item xs={12} sm= {12}>
            <input 
                className={classes.textfield}
                variant='filled' 
                size='small'
                name={name}
                placeholder={label}
                required
                type={type}
                onChange={handleChange}
            />
        </Grid>
    </>
  )
}

export default Input