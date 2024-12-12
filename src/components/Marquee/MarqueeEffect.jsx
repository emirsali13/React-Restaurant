import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeEffect.css";

const MarqueeEffect = () => {
  return (
    <div className="marquee">
      <Marquee speed={120} gradient={false} pauseOnHover>
        <div className="marquee-inner ">
          <span className="promo-code text1">
            Use code <span className="code">LavintaPizza2024</span> for 15%
            discount
          </span>
          <span className="promo-code">Delicious Pizza Specials Every Day</span>
          <span className="promo-code">Try our New Garlic Parmesan Crust!</span>
          <span className="promo-code">Fast Delivery and Hot Delivery</span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeEffect;
