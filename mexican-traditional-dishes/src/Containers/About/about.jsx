import Container from "../../Components/Container/container";

const About = ({ data }) => {
  return (
    <Container
      headerText={data.header}
      paragraphText={data.content}
      buttonText={data.buttonText}
      invertedTheme={data.invertedTheme}
      image={data.image}
    ></Container>
  );
};

export default About;
