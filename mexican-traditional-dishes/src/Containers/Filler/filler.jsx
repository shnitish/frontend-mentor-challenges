import "./filler.css";

const Filler = ({ data }) => {
  return (
    <section className="filler">
      <a href="#">
        <img src={data.logo} alt="logo" />
      </a>
      <p>{data.content}</p>
      <h3>{data.header3}</h3>
    </section>
  );
};

export default Filler;
