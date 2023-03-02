import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function ProjectDetail({ project }) {
  const { title, description, link, image, github } = project;
  return (
    <div className="project-detail">
      <div class="detail-img-container">
        <img src={image} alt="Project Image" />
      </div>
    </div>
  );
}
