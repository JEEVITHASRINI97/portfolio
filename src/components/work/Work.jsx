import React from 'react'
import './work.css'
import Works from './Works'

function Work() {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">
        <span className="underline__effect">Portfolio</span>
        </h2>
        <span className="section__subtitle">Most recent projects</span>

        <Works />
    </section>
  )
}

export default Work