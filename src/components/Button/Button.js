import "./Button.css";

export default function Button({ text, handleReset }) {
  return (
    <button onClick={handleReset} type="button" className="Button">
      {text}
    </button>
  );
}
