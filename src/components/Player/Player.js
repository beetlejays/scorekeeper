import "./Player.css";

export default function Player({
  name,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <li className="Player">
      <span className="Player__name"> {name} </span>{" "}
      <button className="button-add-subtract" onClick={onDecreaseScore}>
        -
      </button>{" "}
      {score}{" "}
      <button className="button-add-subtract" onClick={onIncreaseScore}>
        +
      </button>
    </li>
  );
}
