import "./App.css";
import { PlayersArray } from "./data";
import Button from "./components/Button/Button";
import Player from "./components/Player/Player";
import PlayerForm from "./components/PlayerForm/PlayerForm";

function App() {
  return (
    <div className="App">
      <main className="scorekeeper-container">
        <ul className="player-list">
          {PlayersArray.map((player) => (
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
