import "./App.css";
import Hero from "./Containers/Hero/hero";
import Menu from "./Containers/Menu/menu";
import About from "./Containers/About/about";
import Discount from "./Containers/Discount/discount";
import Offers from "./Containers/Offers/offers";
import Filler from "./Containers/Filler/filler";
import Subscribe from "./Containers/Subscribe/subscribe";
import Footer from "./Containers/Footer/footer";
import Navigation from "./Containers/Navigation/navigation";

import {
  navigation,
  heroSection,
  menuSection,
  aboutSection,
  discountSection,
  offersSection,
  fillerSection,
  subscribeSection,
  footerSection,
} from "./static/data";

function App() {
  return (
    <>
      <Navigation data={navigation}></Navigation>
      <Hero data={heroSection}></Hero>
      <Menu data={menuSection}></Menu>
      <About data={aboutSection}></About>
      <Discount data={discountSection}></Discount>
      <Offers data={offersSection}></Offers>
      <Filler data={fillerSection}></Filler>
      <Subscribe data={subscribeSection}></Subscribe>
      <Footer data={footerSection}></Footer>
    </>
  );
}

export default App;
