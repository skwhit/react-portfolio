import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return { color: isActive ? "black" : "#808080" };
  };

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-list");

  //hamburger menu toggled between visible and hidden. Used to navigate around the website
  const hamburgerClick = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  //When a nav item is clicked, hamburger menu will automatically return to being hidden
  const navlinkClick = ()=>{
    hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }

  return (
    <nav>
      <div>
        <h1>Spencer Whitlow, Software Developer</h1>
      </div>
      <div
        className="hamburger"
        onClick={hamburgerClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="nav-list">
        <NavLink onClick={navlinkClick} style={navLinkStyles} className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink onClick={navlinkClick} style={navLinkStyles} className="nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink onClick={navlinkClick} style={navLinkStyles} className="nav-link" to="/resume">
          Resume
        </NavLink>
      </div>
    </nav>
  );
}
