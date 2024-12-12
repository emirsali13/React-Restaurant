import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [isMobileMenuOpen]);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false); // Close the mobile menu

    // Scroll to the top if navigating to "home" or "signin"
    if (menuName === "home" || menuName === "signin") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="navbar-toggle-container">
        {isMobileMenuOpen ? (
          <div className="open-nav">
            <IoMdCloseCircleOutline
              className="mobile-menu-toggle close"
              onClick={toggleMobileMenu}
            />

            <h1 className="logo">
              <Link
                to="/home"
                className="logo-link"
                onClick={() => handleMenuClick("home")}
              >
                Lavinta <span>Pizza</span>
              </Link>
            </h1>
          </div>
        ) : (
          <div className="closed-nav">
            <GiHamburgerMenu
              className="mobile-menu-toggle open"
              onClick={toggleMobileMenu}
            />

            <h1 className="logo">
              <Link
                to="/home"
                className="logo-link"
                onClick={() => handleMenuClick("home")}
              >
                Lavinta <span>Pizza</span>
              </Link>
            </h1>
          </div>
        )}
      </div>
      <div className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        <h1 className="logo">
          <Link
            to="/home"
            className="desktop-logo logo"
            onClick={() => handleMenuClick("home")}
          >
            Lavinta <span>Pizza</span>
          </Link>
        </h1>

        <div className={`navbar-right ${isMobileMenuOpen ? "open" : ""}`}>
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>

            <div className="dot"></div>
          </div>
          {/* <button onClick={() => setShowLogin(true)}>
            <Link to="/signin">sign in</Link>
          </button> */}

          <Link to="/signin" onClick={() => handleMenuClick("signin")}>
            <AiOutlineLogin
              fontSize={35}
              color="tomato"
              onClick={() => setShowLogin(true)}
            />
          </Link>
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <Link
            to="/home"
            onClick={() => handleMenuClick("home")}
            className={menu === "home" ? "active" : "not-active"}
          >
            Home
          </Link>

          <Link
            to=""
            href="#about-us"
            onClick={() => handleMenuClick("about-us")}
            className={menu === "about-us" ? "active" : "not-active"}
          >
            About Us
          </Link>
          <a
            href="#footer"
            onClick={() => handleMenuClick("contact-us")}
            className={menu === "contact-us" ? "active" : "not-active"}
          >
            Contact Us
          </a>
          <hr />
        </ul>
        {isMobileMenuOpen ? (
          <p className="footer-copyright">
            © 2024 Lavinta Pizza. All rights reserved.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
