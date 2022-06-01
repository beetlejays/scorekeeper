import "./PlayerForm.css";

export default function PlayerForm() {
  return (
    <form className="PlayerForm">
      <label htmlFor="Add Player"></label>
      <h2>Add Player</h2>
      <input type="text"></input>
      <button>Add</button>
    </form>
  );
}
