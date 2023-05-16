import "./subscribe.css";
const Subscribe = ({ data }) => {
  return (
    <section className="subscribe">
      <h2>{data.header2}</h2>
      <p>{data.content}</p>
      <div className="subscribe__details">
        <input type="text" placeholder="Your Email" />
        <button>
          <span>{data.buttonText}</span>
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
