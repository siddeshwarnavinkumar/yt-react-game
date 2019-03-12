import React from "react";

import "./HealthBar.css";

const healthBar = props => {
  return (
    <div className="HealthBar">
      <h1>{props.name}</h1>
      <progress value={props.health} max="100" />
    </div>
  );
};

export default healthBar;
