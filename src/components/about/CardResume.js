import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Stack } from '@mui/material';
import Jeevitharesume from './resume.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import resume from './Jeevitha Resume.pdf'

export default function AboutCardResume() {
  const resumeLink = "https://drive.google.com/file/d/15ToLldMbTMQvLZb7c89pnsrLHU2YmJME/view?usp=sharing";

  return (
    <Card sx={{ width: 545,height:590, marginTop:"30px" }} elevation={6}>
      <CardActionArea>
      <CardContent className='mb-1 p-1'>
          <Typography align="center" gutterBottom variant="h5" component="div">
            Resume
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className='d-flex flex-row pb-1  justify-content-around'>
           <Stack  direction='row' spacing={3}>
                <Button startIcon={<RemoveRedEyeIcon/>} href={resumeLink} target="_blank" > View</Button>
                <Button endIcon={<DownloadForOfflineIcon/>} download='resume.pdf' href={resume} >Download</Button>
           </Stack>
           </div>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="420"
          image={Jeevitharesume}
          alt="green iguana"
          style={{objectFit: "contain",marginTop:'1px'}}
        />
          
  
      </CardActionArea>
    </Card>
  );
}