import { Grid,TextField} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Input = ({name,type,label,half ,handleChange,isPassward}) => {
  const classes= useStyles();
  return (
    <>
        <Grid item xs={12} sm= { half ? 6:12}>
            <TextField
                className={classes.textfield}
                variant='filled' 
                name={name}
                label={label}
                fullWidth
                // required
                type={type}
                onChange={handleChange}
            />
        </Grid>
    </>
  )
}

export default Input