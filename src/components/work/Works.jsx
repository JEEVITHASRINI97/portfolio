import React from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItmes from './WorkItmes'

const Works = () => {
  return (
    <div className="work__container container grid">
        {projectsData.map((item) => {
            return <WorkItmes item={item} key={item.id}/>
        })}
    </div>
  )
}

export default Works