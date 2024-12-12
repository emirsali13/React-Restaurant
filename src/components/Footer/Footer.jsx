import { assets } from "../../assets/assets";
import AppDowload from "../AppDownload/AppDowload";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">
            Lavinta <span>Pizza</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestiae quisquam fugit dolores, expedita perferendis
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>089 6050 181</li>
            <li>emir_13@abv.bg</li>
          </ul>
        </div>
      </div>
      <AppDowload />
      <hr />

      <p className="footer-copyright">
        © 2024 Lavinta Pizza. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
