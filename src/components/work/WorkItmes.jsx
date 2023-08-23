import React from 'react'
import './work.css'

const WorkItmes = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <h3 className="work__title">{item.title}</h3>
        <img src={item.image} alt="" className='work__img' />
        <h4 className="stack__title">Tech Stacks:</h4>
        <p className="techsctack__subtitle">{item.techStack} </p>

        <div className="credentials">
        <h4 className="stack__title">Demo Credentials:</h4>
        <p className="techsctack__subtitle">{item.user} </p>
        <p className="techsctack__subtitle">{item.password} </p>
        </div>

        <div className="link__buttons">
        <a href={item.demoLink}  target="_blank" className="work__button button button--flex">Demo</a>
        <a href={item.sourceCode}  target="_blank" className="work__button button button--flex">Source Code</a>
        </div>
    </div>
  )
}

export default WorkItmes