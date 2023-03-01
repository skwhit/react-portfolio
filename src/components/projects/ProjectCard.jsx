import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, setProject }) {
console.log(project)
  const { title, description, link, image, github } = project;
  // const navigate = useNavigate();
  return (
    <div className="project-card" onClick={setProject(project)}>
        <h3>
          {title}
        </h3>
      <div className="project-img-container">
        <img src={image} alt="project-image" />
      </div>
      {/* <div class="card-container">
        
        <p>{description}</p>
        <a href={github} target="_blank">
          <button class="src-code">Code</button>
        </a>
      </div> */}
    </div>
  );
}

export default ProjectCard;
