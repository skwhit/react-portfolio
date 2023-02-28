import React from "react";

function ProjectCard({ project }) {
console.log(project)
  const { title, description, link, image, github } = project;
  return (
    <div>
        <h3>
          <strong>{title}</strong>
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
