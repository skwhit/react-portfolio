import ProjectList from './ProjectList';
import { projectData } from '../../services/ProjectData';
import ProjectDetail from './ProjectDetail';
import { useEffect, useState } from 'react';

export default function projects() {
  const [project, setProject] = useState({})

  useEffect(() => {
    console.log(project);
  },[project])
  return (
    <section className='projects-container'>
        <ProjectList setProject={setProject} />
        { !project ? <></> : <ProjectDetail/>}
        
    </section>
  )
}
