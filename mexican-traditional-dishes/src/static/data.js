import image2 from "../assets/Images/image2.png";
import image3 from "../assets/Images/image3.png";
import image4 from "../assets/Images/image4.png";
import image5 from "../assets/Images/image5.png";
import logo1 from "../assets/Images/logo1.svg";

export const navigation = ["Home", "About", "Menu", "Offers", "Contact"];

export const heroSection = {
  header: "Mariachi",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  buttonText: "Order Now",
  logo: logo1,
};

export const menuSection = {
  header: "Don't Miss our Menu!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  buttonText: "See Menu",
  invertedTheme: true,
  image: image2,
};

export const aboutSection = {
  header: "About Mariachi",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  buttonText: "Tell Me More",
  invertedTheme: true,
  image: image3,
};

export const discountSection = {
  header1: "25%",
  header3: "DISCOUNT",
  header2: "ON TACOS!",
  image: image4,
};

export const offersSection = {
  header: "See Our Offers",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  buttonText: "See Offers",
  image: image5,
};

export const fillerSection = {
  logo: logo1,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  header3: "Pedro Rodriguez",
};

export const subscribeSection = {
  header2: "Get Our Latest Offers!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  buttonText: "Subscribe",
};

export const footerSection = {
  leftFooter: {
    header: "Mariachi",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.",
  },
  rightFooter: [
    {
      header: "About",
      links: [
        "History",
        "Our Team",
        "Brand Guidelines",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      header: "Services",
      links: [
        "How to Order",
        "Our Product",
        "Offers",
        "Promo",
        "Payment Method",
      ],
    },
    {
      header: "Other",
      links: ["Contact Us", "Help"],
    },
  ],
};
