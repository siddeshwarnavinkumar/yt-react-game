import React, { Component } from "react";
import "./App.css";

import Game from "./containers/Game/Game";

class App extends Component {
  state = {
    inputForm: {
      name1: "",
      name2: ""
    }
  };

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
