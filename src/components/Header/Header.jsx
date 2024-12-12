import "./Header.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="overlay"></div>
        <div className="header-content">
          <h2>Italian-Inspired Pizza Excellence!</h2>
          <p>Fresh Ingredients, Quality Taste, Unforgettable Moments!</p>
          <button>View Menu</button>
        </div>
        <div className="social-icons">
          <FaFacebook className="facebook s-icon" />
          <FaTwitter className="twitter s-icon" />
          <FaInstagram className="instagram s-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
