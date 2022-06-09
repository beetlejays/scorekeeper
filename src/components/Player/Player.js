import "./Player.css";
import "../MainButton/MainButton";
import ButtonPrimary from "../MainButton/MainButton";

export default function Player({
  name,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <li className="Player">
      <span className="Player__name"> {name} </span>{" "}
      <ButtonPrimary onClick={onDecreaseScore}>-</ButtonPrimary> {score}{" "}
      <ButtonPrimary className="button-add-subtract" onClick={onIncreaseScore}>
        +
      </ButtonPrimary>
    </li>
  );
}
