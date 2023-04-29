import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const handleNavClick = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <header className="primary-header">
      <div className="nav-container flex">
        {navExpanded && (
          <nav className="primary-navigation flex">
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              onClick={handleNavClick}
            >
              <img
                className="icon-close"
                src={iconClose}
                alt="Close Navigation"
              />
            </button>
            <ul role="list" className="nav-list flex fw-700">
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  home
                </a>
              </li>
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  shop
                </a>
              </li>
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  about
                </a>
              </li>
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        )}

        {!navExpanded && (
          <nav className="closed-navigation flex">
            <button
              className="hamburger-toggle"
              aria-controls="closed-navigation"
              onClick={handleNavClick}
            >
              <img
                className="icon-hamburger"
                src={iconHamburger}
                alt="Hamburger"
              />
            </button>
            <a href="#">
              <img src={logo} alt="W" />
            </a>
            <ul role="list" className="nav-closed-list flex fw-700">
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  home
                </a>
              </li>
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  shop
                </a>
              </li>
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  about
                </a>
              </li>
              <li>
                <a className="fc-dark-grayish-blue" href="#">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {/* <div className="backdrop"></div> */}
    </header>
  );
};

export default Navbar;
