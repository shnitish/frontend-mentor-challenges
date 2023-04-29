import { useState } from "react";
import arrow from "../../assets/images/icon-arrow.svg";
import iconLeft from "../../assets/images/icon-angle-left.svg";
import iconRight from "../../assets/images/icon-angle-right.svg";
import "./imageContainer.css";

const ImageContainer = ({ post }: any) => {
  const [index, setCurrentIndex] = useState(0);

  const handleClick = (direction: number) => {
    const dir = direction + index;
    if (dir < 0) setCurrentIndex(2);
    else setCurrentIndex(dir % 3);
  };

  return (
    <section className="container">
      <picture>
        <div className="slider flex">
          <button
            className="icon-left"
            onClick={() => {
              handleClick(-1);
            }}
          >
            <img src={iconLeft} alt="" />
          </button>
          <button
            className="icon-right"
            onClick={() => {
              handleClick(1);
            }}
          >
            <img src={iconRight} alt="" />
          </button>
        </div>
        <source media="(max-width:600px)" srcSet={post[index].mobileImage} />
        <img className="carousel" src={post[index].desktopImage} />
      </picture>
      <div className="post flex-rev">
        <h1 className="fw-700">{post[index].title}</h1>
        <p>{post[index].content}</p>
        <button className="button flex">
          <span>Shop Now</span>
          <img className="arrow" src={arrow} alt="" />
        </button>
        <div className="slider flex">
          <button
            className="icon-left"
            onClick={() => {
              handleClick(-1);
            }}
          >
            <img src={iconLeft} alt="" />
          </button>
          <button
            className="icon-right"
            onClick={() => {
              handleClick(1);
            }}
          >
            <img src={iconRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageContainer;
