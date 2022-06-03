import "./App.css";
import { useState } from "react";
import Button from "./components/Button/Button";
import Player from "./components/Player/Player";
import PlayerForm from "./components/PlayerForm/PlayerForm";

function App() {
  const [players, setPlayers] = useState([]);

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  function increaseScore(index) {
    setPlayers(player.score + 1);
  }

  function decreaseScore() {
    setPlayers(player.score + 1);
  }

  return (
    <div className="App">
      <main className="scorekeeper-container">
        <ul className="player-list">
          {players.map((player) => (
            <Player key={player.name} name={player.name} score={player.score} />
          ))}
        </ul>
        <Button text="Reset scores" />
        <Button text="Reset all" />
        <PlayerForm onCreatePlayer={createPlayer} />
      </main>
    </div>
  );
}

export default App;
