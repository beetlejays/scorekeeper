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

  function resetScores() {
    console.log("works");
    setPlayers(
      players.map((player) => {
        return { ...player, score: 0 };
      })
    );
  }

  function increaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  return (
    <div className="App">
      <main className="scorekeeper-container">
        <ul className="player-list">
          {players.map((player, index) => (
            <Player
              key={player.name}
              name={player.name}
              score={player.score}
              onIncreaseScore={() => increaseScore(index)}
              onDecreaseScore={() => decreaseScore(index)}
            />
          ))}
        </ul>
        <Button handleReset={resetScores} text="Reset scores" />
        <Button text="Reset all" />
        <PlayerForm onCreatePlayer={createPlayer} />
      </main>
    </div>
  );
}

export default App;
