import "./App.css";

import Button from "./components/Button/Button";
import Player from "./components/Player/Player";
import PlayerForm from "./components/PlayerForm/PlayerForm";

function App() {
  const players = ["Mike Meyers", "Jim Jingle", "Jenny Jam", "Susanne Suarez"];

  return (
    <div className="App">
      <main className="scorekeeper-container">
        <ul className="player-list">
          {players.map((player) => (
            <Player name={player} score={30} />
          ))}
        </ul>
        <Button text="Reset scores" />
        <Button text="Reset all" />
        <PlayerForm />
      </main>
    </div>
  );
}

export default App;
