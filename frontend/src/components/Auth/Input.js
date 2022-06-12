import { Grid,TextField} from '@material-ui/core'
import React from 'react'

const Input = ({name,type,label,half ,handleChange,isPassward}) => {
  return (
    <>
        <Grid item xs={12} sm= { half ? 6:12}>
            <TextField
                variant='outlined' 
                name={name}
                label={label}
                varient='outlined'
                fullWidth
                required
                type={type}
                onChange={handleChange}
            />
        </Grid>
    </>
  )
}

export default Input