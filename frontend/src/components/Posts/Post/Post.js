import React from 'react'


import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DeleteIcon from '@mui/icons-material/Delete';


function Post(props) {
  console.log(props);
  const {_id,name,caption,image,likes} = props.post;

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="MemeImage"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pMSP8fgfWLtqkSZbDw_XNEMpbrwqQ7n9jw&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <ThumbUpIcon fontSize='default' /> 
        </Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Post