import React from 'react'
import './Projects.css'
import projects from '../../Data/projects.json'
import { ProjectCard } from './ProjectCard';

function Projects() {
  return (
    <section id="projects">
      <h2 className="projectsTitle">Select Works</h2>
      <span className="projectsDescription">
        I have a strong foundation in converting design into pixel-perfect code.
        I am passionate about user-centered web development, and understand its
        potential within dynamic digital spaces. I really enjoy solving problems
        with clean scalable solutions.
      </span>
<div className='projectsContainer'>
    {projects.map((project, id) => {
        return(
        <ProjectCard key={id} project={project} />
   ) })}
</div>
<button className='projectsBtn'>See More</button>
    </section>
  );
}

export default Projects