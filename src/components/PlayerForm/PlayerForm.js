import ButtonPrimary from "../MainButton/MainButton";
import "./PlayerForm.css";

export default function PlayerForm({ onCreatePlayer }) {
  function handlePlayerSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    const newPlayer = { name: name.value, score: 0 };

    onCreatePlayer(newPlayer);
    form.reset();
    name.focus();
  }

  //////// return component

  return (
    <form className="PlayerForm" onSubmit={handlePlayerSubmit}>
      <h2>Add Player</h2>
      <label htmlFor="Name"></label>
      <input type="text" id="name" name="name" />
      <ButtonPrimary text="Add Player" />
    </form>
  );
}
