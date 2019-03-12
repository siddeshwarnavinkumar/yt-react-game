import React, { Component } from "react";

import Player from "../../components/Player/Player";

const ATTACK_POWER_MIN = 10;
const ATTACK_POWER_MAX = 15;

const HEAL_POWER = 5;

class Game extends Component {
  state = {
    gameOver: false,
    currentTurn: 0,
    players: [
      {
        name: "Siddeshwar",
        health: 100
      },

      {
        name: "Bradcouch",
        health: 100
      }
    ]
  };

  updateTurnHandler = () => {
    let currentTurn = 0;

    if (this.state.currentTurn < 1) currentTurn = 1;

    let noHealth = this.state.players.filter(player => player.health <= 0);

    console.log(noHealth);

    if (noHealth.length > 0) {
      this.setState({
        currentTurn,
        gameOver: this.state.players.find(player => player !== noHealth[0])
      });
    } else {
      this.setState({ currentTurn });
    }
  };

  attackPlayerHandler = player => {
    const updatedPlayers = [...this.state.players];
    let pindex = 0;

    if (player < 1) pindex++;

    const attack_power = Math.floor(
      Math.random() * ATTACK_POWER_MAX + ATTACK_POWER_MIN
    );

    updatedPlayers[pindex].health -= attack_power;

    this.setState({
      players: updatedPlayers
    });

    this.updateTurnHandler();
  };

  healPlayerHandler = player => {
    const updatedPlayers = [...this.state.players];

    updatedPlayers[player].health += HEAL_POWER;

    this.setState({
      players: updatedPlayers
    });

    this.updateTurnHandler();
  };

  render() {
    return (
      <div>
        <div className="HealthDisplay">
          {!this.state.gameOver ? (
            this.state.players.map((player, index) => (
              <Player
                key={index}
                id={index}
                currentTurn={this.state.currentTurn}
                health={player.health}
                name={player.name}
                attackPlayer={this.attackPlayerHandler}
                healPlayer={this.healPlayerHandler}
              />
            ))
          ) : (
            <div>
              <h1>Game Over, {this.state.gameOver.name} won!</h1>
              <a href="/">Play again</a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Game;
