import React, { useContext } from 'react';
import './Project.css';

import Experience from './experience';
import Typography from '@mui/material/Typography';


const Work = () => {
  
  return (
    <div className='projectFull' id='work'>
      <Typography  align="center"  gutterBottom variant="h4" component="div">
      <span className="underline__effect">   Experience</span>
          </Typography>
      <hr />
      <br/>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">

  <div className="carousel-inner" style={window.innerWidth <800?{minHeight:"1000px"}:{minHeight:"0px"}}>
    <div className="carousel-item active" >
      <Experience />
    </div>

    </div>
  </div>

                          
  
</div>

  )
}

export default Work