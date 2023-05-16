import "./info.css";
import Button from "../Button/button";

const Info = ({ headerText, paragraphText, buttonText, invertedTheme }) => {
  return (
    <div className="menu__details">
      <h2 className={invertedTheme ? null: "inverted__heading"}>{headerText}</h2>
      <p className={invertedTheme ? null : "inverted__paragraph"}>
        {paragraphText}
      </p>
      <div>
        <Button text={buttonText} invertedTheme={invertedTheme}></Button>
      </div>
    </div>
  );
};

export default Info;
