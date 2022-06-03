import "./PlayerForm.css";
import { useState } from "react";

export default function PlayerForm() {
  const [players, setPlayers] = useState([]);

  function handlePlayerSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { player } = form.elements;

    setPlayers([
      ...players,
      {
        name: player.value,
        score: 0,
      },
    ]);
    console.log(players);
  }

  //////// return component

  return (
    <form className="PlayerForm" onSubmit={handlePlayerSubmit}>
      <h2>Add Player</h2>
      <label htmlFor="add-player"></label>
      <input type="text" id="add-player" name="player" />
      <button className="Button">Add Player</button>
    </form>
  );
}
