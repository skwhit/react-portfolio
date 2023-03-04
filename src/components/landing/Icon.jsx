import React from "react";
import { useNavigate } from "react-router-dom";

export default function Icon({ icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    icon.title === "Email"
      ? window.open(icon.link, "emailWindow")
      : icon.index < 5
      ? window.open(icon.link, "_blank")
      : navigate(icon.link);
  };

  return (
    <div className={`icon-container icon-${icon.id}`} onClick={handleClick}>
      <p className="icon">
        <i className={icon.faClass}></i>
      </p>
      <div className="icon-title">
        <p>{icon.title}</p>
      </div>
    </div>
  );
}
