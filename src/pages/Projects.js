import React from 'react'
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((it) => {
          return <ProjectItem name = {it.name} image ={it.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects