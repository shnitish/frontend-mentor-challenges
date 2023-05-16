import Info from "../../Components/Info/info";
import "./menu.css";

const Menu = ({ data }) => {
  return (
    <section className="menu">
      <Info
        headerText={data.header}
        paragraphText={data.content}
        buttonText={data.buttonText}
        invertedTheme={data.invertedTheme}
      ></Info>
      <div className="menu__dishes">
        <picture>
          <img src={data.image} alt="Menu Dishes" />
        </picture>
      </div>
    </section>
  );
};

export default Menu;
