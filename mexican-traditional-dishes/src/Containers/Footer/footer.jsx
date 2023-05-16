import {
  faFacebook,
  faWhatsapp,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h4>{data.leftFooter.header}</h4>
        <p>{data.leftFooter.content}</p>
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
      <ul className="footer__right">
        {data.rightFooter.map((col, i) => {
          return (
            <li key={i}>
              <h4>{col.header}</h4>
              {col.links.map((link, j) => {
                return (
                  <ul className="box" key={j}>
                    <li>
                      <a href="#">{link}</a>
                    </li>
                  </ul>
                );
              })}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
