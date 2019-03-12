import React from "react";

import "./ControlPanel.css";

const controlPanel = props => {
  return (
    <div className="ControlPanel">
      <button onClick={props.healPlayer} disabled={props.disableControls}>
        <i className="material-icons">healing</i>
      </button>
      <button onClick={props.attackPlayer} disabled={props.disableControls}>
        <i className="material-icons">flash_on</i>
      </button>
    </div>
  );
};

export default controlPanel;
