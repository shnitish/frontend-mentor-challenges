import Container from "../../Components/Container/container";

const Offers = ({ data }) => {
  return (
    <Container
      headerText={data.header}
      paragraphText={data.content}
      buttonText={data.buttonText}
      image={data.image}
    ></Container>
  );
};

export default Offers;
