import "./about.css";

const About = ({ about }: any) => {
  return (
    <section className="about flex-rev">
      <h2 className="fs-125 fw-700">{about.title}</h2>
      <p className="fs-895">{about.content}</p>
    </section>
  );
};

export default About;
