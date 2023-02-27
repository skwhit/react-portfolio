import React from "react";
import { projectData } from "../../services/ProjectData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function ProjectList() {
  console.log(projectData);
  return (
    <div className="project-list-container">
      {projectData.map((item) => (
        <ProjectCard project={item} />
      ))}
    </div>
  );
}

export default ProjectList;
