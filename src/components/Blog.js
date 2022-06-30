import { CardContent,Typography,CardMedia,Avatar,CardHeader,Card } from '@mui/material'
import React from 'react';

const Blog = ({
  title,
  content,
  image,
  tag,
  user
}) => {
  return (
    <div>
      {" "}
      <Card style={{ width:"40%", margin:"auto",mt: 2,padding: 2,boxShadow:"5px 5px 10px #ccc", 
      "&:hover": {
        boxShadow:"10px 10px 20px #ccc"
      },
      }}>
      <CardHeader
        avatar={
          <Avatar style={{ bgcolor: "red" }} aria-label="recipe">
            {user}
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {content}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Blog




