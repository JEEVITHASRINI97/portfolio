import React from 'react'
import './about.css'
import AboutCard from './Card'
import AboutCardResume from './CardResume'

const About = () => {
  return (
    <div className='aboutPage' id='about'>
      <h1 className='text-center m-3'>Ab<span className="underline__effect">out</span></h1>
      <div className='d-flex flex-row flex-wrap justify-content-around align-items-center' style={{minHeight:'60vh'}}>
        <AboutCard />
        <AboutCardResume />
      </div>
      <br/>
    </div>
  )
}

export default About