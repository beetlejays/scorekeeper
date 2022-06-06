import "./Button.css";

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} type="button" className="Button">
      {text}
    </button>
  );
}
