import "./discount.css";

const Discount = ({ data }) => {
  return (
    <section className="discount">
      <div className="discount__info">
        <h1>{data.header1}</h1>
        <h3>{data.header3}</h3>
        <h2>{data.header2}</h2>
      </div>
      <picture className="taco">
        <img src={data.image} alt="Taco" />
      </picture>
    </section>
  );
};

export default Discount;
