import React from "react";

import "./Player.css";

import ControlPanel from "../ControlPanel/ControlPanel";
import HealthBar from "../HealthBar/HealthBar";

const player = props => {
  let cssClasses = ["Player"];

  if (props.currentTurn !== props.id)
    cssClasses = ["Player", "Player__disabled"];

  return (
    <div className={cssClasses.join(" ")}>
      <HealthBar name={props.name} health={props.health} />
      <ControlPanel
        disableControls={props.currentTurn !== props.id}
        attackPlayer={() => props.attackPlayer(props.id)}
        healPlayer={() => props.healPlayer(props.id)}
      />
    </div>
  );
};

export default player;
