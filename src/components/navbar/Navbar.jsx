import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>Spencer Whitlow, Software Developer</h1>
      </div>
      <div className="nav-list">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/projects">Projects</NavLink>
        <NavLink className="nav-link" to="/skills">Skills</NavLink>
        <NavLink className="nav-link" to="/resume">Resume</NavLink>
      </div>
    </nav>
  );
}
