import { Button, Chip, Stack, useTheme } from '@mui/material';
import React from 'react'

//Mail application screenshots
import mail1 from '../../assets/projects/mail/1.png';
import mail2 from '../../assets/projects/mail/2.png';
import mail3 from '../../assets/projects/mail/3.png';
import mail4 from '../../assets/projects/mail/4.png';
import mail5 from '../../assets/projects/mail/5.png';
import mail6 from '../../assets/projects/mail/6.png';
import mail7 from '../../assets/projects/mail/7.png';


const Bulkemail = () => {
    const text = useTheme().palette.text.primary ;
    const mail=['html5','CSS3','React','Javascript','Figma','Mui','CRUD','Bootstrap']
    const imageData={
        mail:[{url:  mail1},
              {url:  mail2},
              {url:  mail3},
              {url:  mail4},
              {url:  mail5},
              {url:  mail7},
              {url:  mail6}],
      }

  return (
    <div>
      
        <div className="highlights">
          <div className="container">
              <section className="highlight row">
                  <div className="col-md-6 col-md-offset-2 text-start" style={{color:text}}>
                      <h3 className="highlight-title">Frontend Developer</h3>
                      <h4 className="highlight-description">Simule Inc </h4>
                      <h6 className="highlight-description">04/2021 - 05/2023 <span className='float-right justify-content-around'>Chennai,Tamilnadu</span></h6>
                      <h6 className="highlight-description">Decentralized simulation of earth blockchain services</h6>
                      <p className="highlight-description">
                      <br />
                    <h5>Achievements/Tasks </h5>
                    <ul>
                      <li>Developed a Metaverse 2D User level website using JavaScript. </li>
                      <li> Built a multiple web page UI and functionality in javascript toenhance a UI using Bootstrap. </li>
                      <li>Performed CRUD operations, Dom ,sidebar,navbar and pagination. </li>
                      <li>Implemented multiple component design in figma tool andreplicate the data in react.</li>
                      <li> Deployed the code and Debug the error , performed Regresstesting ,Quality Analysis and written test cases based on therequirements .</li>
                    </ul>
                    <h5>Technology Used </h5>
                      <Stack direction="row" className='d-flex flex-wrap' spacing={1}>
                        {mail.map((e,inx)=> <Chip key={`${inx}`} variant="outlined" className='m-1' color="error" size="small" label={e}/>)}
                      </Stack>
                      </p>
                  </div>
                  <div className="col-md-6 col-md-offset-1">
                  <h3 className="highlight-title">Junior Analyst</h3>
                      <h4 className="highlight-description">Iq Backoffice </h4>
                      <h6 className="highlight-description">07/2020 - 04/2021 <span className='float-right justify-content-around'>Chennai,Tamilnadu</span></h6>
                      <h6 className="highlight-description">Bank and Financial services</h6>
                      <p className="highlight-description">
                      <br />
                    <h5>Achievements/Tasks </h5>
                    <ul>
                      <li>Coordinated a Team of three members , assign a task to
them and reported to team leader .    </li>
                      <li>Analyzed the Requirements from the client and developed
Test cases based on functional Requirements. </li>
                      <li>Quality Analyzing ,Integration, coordinate oversee IQR
Projects and debugging and resolving technical problem. </li>
                      <li>performing SQL Commands for storing, filtering and
retrieving the data from the database .</li>
                    </ul>
                   
                      </p>
                  </div>
              </section>
                  <br />
                  <br />
                 
          </div>
      </div>
    </div>
  )
}

export default Bulkemail