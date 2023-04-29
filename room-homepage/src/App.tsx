import { posts, about } from "./static/data";
import About from "./Containers/About/about";
import ImageContainer from "./Containers/ImageContainer/imageContainer";
import Navbar from "./Containers/Navbar/navbar";
import darkImage from "./assets/images/image-about-dark.jpg";
import lightImage from "./assets/images/image-about-light.jpg";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="main-grid">
        <ImageContainer post={posts}></ImageContainer>
        <section className="card">
          <img src={darkImage} alt="" />
        </section>
        <About about={about}></About>
        <section className="card">
          <img src={lightImage} alt="" />
        </section>
      </main>
    </>
  );
};

export default App;
