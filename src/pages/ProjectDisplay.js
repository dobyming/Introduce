import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from './../helpers/ProjectList';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';
import Link from "@material-ui/core/Link";

const ProjectDisplay = () => {
    const {id} = useParams();
    const project = ProjectList[id];

  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <Link href = {project.github} target = "_blank">
            <GithubIcon/>
        </Link>
        
    </div>
  )
}

export default ProjectDisplay