import "./button.css";
const Button = ({ text, invertedTheme }) => {
  return (
    <button
      className={"button " + (invertedTheme  ? "inverted" : "natural")}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
