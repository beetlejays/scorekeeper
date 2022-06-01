import "./App.css";
import Button from "./components/Button/Button";
import Player from "./components/Player/Player";
import PlayerForm from "./components/PlayerForm/PlayerForm";

function App() {
  return (
    <div className="App">
      <main>
        <ul>
          <Player name="John Doe" score={30} />
          <Player name="Jane Doe" score={23} />
        </ul>
        <Button text="Reset scores" />
        <Button text="Reset all" />
      </main>
    </div>
  );
}

export default App;
