import logo1 from "../../assets/Images/logo1.svg";
import Button from "../../Components/Button/button";
import "./hero.css";

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="info">
        <a href="#">
          <img src={data.logo} alt="logo" />
        </a>
        <div className="info__content">
          <h1>{data.header}</h1>
          <p>{data.content}</p>
          <div>
            <Button text={data.buttonText}></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
