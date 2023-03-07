import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  const navLinkStyles = ({ isActive }) => {
    
      return { textDecoration: isActive ? "2px underline" : "none" };
  };

  return (
    <nav>
      <div>
        <h1>Spencer Whitlow, Software Developer</h1>
      </div>
      <div className="nav-list">
        <NavLink style={navLinkStyles} className="nav-link" to="/">Home</NavLink>
        <NavLink style={navLinkStyles} className="nav-link" to="/projects">Projects</NavLink>
        <NavLink style={navLinkStyles} className="nav-link" to="/skills">Skills</NavLink>
        <NavLink style={navLinkStyles} className="nav-link" to="/resume">Resume</NavLink>
      </div>
    </nav>
  );
}
