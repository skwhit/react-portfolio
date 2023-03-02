import React, { useEffect, useState } from 'react';

import ProjectList from './ProjectList';
import { projectData } from '../../services/ProjectData';
import ProjectDetail from './ProjectDetail';

function Projects() {
  const initialState = {
    title: "",
    description: "",
    link: "",
    image: "",
    github: ""
  }
  const [project, setProject] = useState(initialState)

  useEffect(() => {
    console.log(project);
  },[project])
  // const [count, setCount] = useState(0)


  return (
    <section className='projects-container'>
        <ProjectList setProject={setProject} />
        { project.title === "" ? <></> : <ProjectDetail project={project}/>}
        
    </section>
  )
}

export default Projects;