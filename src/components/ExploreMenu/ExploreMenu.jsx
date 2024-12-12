import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import MarqueeEffect from "../Marquee/MarqueeEffect";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ExploreMenu = ({ category, setCategory }) => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
    setCategory("All");
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <MarqueeEffect />
      <div className="btn-container">
        <h1>Filter Your Favourite Foods</h1>
        <span className="toggle-arrow">
          {showCategories ? (
            <FaRegArrowAltCircleUp onClick={toggleCategories} />
          ) : (
            <FaRegArrowAltCircleDown onClick={toggleCategories} />
          )}
        </span>
      </div>

      {showCategories && (
        <div className="explore-menu-list">
          {menu_list.map((item) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={item.menu_name}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
};

export default ExploreMenu;
