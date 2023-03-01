import React from "react";
import author from "../../assets/author.jpg";
import Icon from "./Icon";
import "./Landing.css";

export default function Landing() {
  const icons = [
    { id: "a", title: "Github", faClass:"fa-2x fa-brands fa-github"},
    { id: "b", title: "LinkedIn", faClass:"fa-2x fa-brands fa-linkedin" },
    { id: "c", title: "Email", faClass:"fa-2x fa-solid fa-envelope" },
    { id: "d", title: "Certifications", faClass:"fa-2x fa-solid fa-stamp" },
    { id: "e", title: "Codepen", faClass:"fa-2x fa-brands fa-codepen" },
    { id: "f", title: "Resume", faClass:"fa-2x fa-solid fa-file" },
    { id: "g", title: "Projects", faClass:"fa-2x fa-solid fa-list-check" },
    { id: "h", title: "Skills", faClass:"fa-2x fa-solid fa-lightbulb" },
  ];

  return (
    <div className="landing-container">
      <div className="icons-container">
        {icons.map((item) => (
          <Icon key={`icon${item.id}`} icon={item} />
        ))}
      </div>

      <div className="author-container">
        <img className="author" src={author} alt="" />
      </div>
    </div>
  );
}
