import Info from "../../Components/Info/info";
import "./container.css";

const Container = ({
  headerText,
  paragraphText,
  buttonText,
  invertedTheme,
  image,
}) => {
  return (
    <section className={"container " + (invertedTheme ? "" : "inverted-theme")}>
      <Info
        headerText={headerText}
        paragraphText={paragraphText}
        buttonText={buttonText}
        invertedTheme={invertedTheme}
      ></Info>
      <picture>
        <img src={image} alt="Mexican Dishes Cutout" />
      </picture>
    </section>
  );
};

export default Container;
