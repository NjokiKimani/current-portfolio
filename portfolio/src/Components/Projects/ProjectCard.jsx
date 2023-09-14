import React from 'react'
import './ProjectCard.css'
import { getImageUrl } from '../../util'

export const ProjectCard = ({project:{title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className='projectContainer'>
        <img src={getImageUrl(imageSrc)} alt='' className="projectImage" />
       <h3 className="projectTitle">{title}</h3>
       <br />
       <p className="projectDescription">{description}</p>
       <ul className="projectSkills">
        {skills.map((skill, id)=> {
            return (
                <li  key = {id}className="projectSkill">
                    {skill}
                </li>
            )
        })}
       </ul>
       <div className="projectLinks">
        <a href={demo} className="projectLink">Demo</a>
        <a href={source} className="projectLink">Source</a>
       </div>
        </div>
  )
}
