import "./App.css";
import { useState, useEffect } from "react";
import Player from "./components/Player/Player";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import Heading from "./components/MainHeading/MainHeading";
import styled from "styled-components";
import ButtonPrimary from "./components/MainButton/MainButton";

function App() {
  const [players, setPlayers] = useState(getFromLocal() ?? []);

  function getFromLocal() {
    try {
      const jsonString = localStorage.getItem("players");
      const data = JSON.parse(jsonString);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  function resetAllPlayers() {
    setPlayers([]);
  }

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  function resetScores() {
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
      <Heading text="Hello" />
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
        <MainButton onClick={resetScores}>Reset scores</MainButton>
        <MainButton onClick={resetAllPlayers}>Reset all Players</MainButton>
        <PlayerForm onCreatePlayer={createPlayer} />

        <ButtonPrimary onClick="bla" text="Primary Button" />
      </main>
    </div>
  );
}

export default App;

const MainButton = styled.button`
  margin-bottom: 1rem;
  border: none;
  background-color: goldenrod;
  color: white;
  padding: 0.4rem 0;
  font-size: 1rem;
  cursor: pointer;
`;
