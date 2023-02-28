import React from "react";

export default function Icon({ icon }) {
  return (
    <div className={`icon-container icon-${icon.id}`}>
      <p className="icon"><i className={icon.faClass}></i></p>
      <div className="icon-title"><p>{icon.title}</p></div>
    </div>
  );
}
