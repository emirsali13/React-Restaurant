import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDowload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>Experience Lavinta Pizza with our App!</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDowload;
