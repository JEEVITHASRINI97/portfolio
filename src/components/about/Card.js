import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import coder from './coder.gif'

export default function AboutCard() {
  return (
    <Card sx={{ maxWidth: 500 , marginTop:"30px"}} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={coder}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            My Self
          </Typography>
          <Typography align="left" variant="body2" color="text.secondary">
          Hey, I am Jeevitha Srinivasan,graduated on computer science engineering.
          I have 2 year of experience in Front-end Development.Being an Enthusiastic 
          & Competitive Team player, Seeking Jobs on Web Development , blended with knowledge 
          of Front-End and Back-End elements, I am mostly prioritizing on understanding 
          Client Requirements and developing the Web Contents from scratch idea to Final Stage.
          Currently, I am keenly focusing on Front-End Development.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}