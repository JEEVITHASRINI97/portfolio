import React from 'react'

function Info() {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle"> 2 Year of Frontend Developer  </span>
        </div>

        <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3+ Projects completed</span>
        </div>

        <div className="about__box">
        <i className='bx bx-certification about__icon'></i>
            <h3 className="about__title">Certification</h3>
            <span className="about__subtitle">Guvi Zenclass, IIT Madras</span>
        </div>
    </div>
  )
}

export default Info