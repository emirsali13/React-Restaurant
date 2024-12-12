import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, mins }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const calculateTotalPrice = () => {
    if (cartItems[id] && cartItems[id] > 0) {
      return cartItems[id] * price;
    }
    return 0;
  };

  const getClassName = () => {
    if (mins === "2-4m") {
      return "fast";
    } else if (mins === "4-6m") {
      return "fast";
    } else if (mins === "6-8m") {
      return "fast";
    } else if (mins === "8-10m") {
      return "medium";
    } else if (mins === "10-12m") {
      return "medium";
    } else if (mins === "12-14m") {
      return "medium";
    } else if (mins === "14-16m") {
      return "medium";
    } else if (mins === "16-18m") {
      return "medium";
    } else if (mins === "18-20m") {
      return "slow";
    } else if (mins === "20-22m") {
      return "slow";
    } else if (mins === "22-24m") {
      return "slow";
    }

    return "";
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {cartItems[id] > 0 && (
          <div className="added">
            Added {cartItems[id]} items - ${calculateTotalPrice().toFixed(2)}
          </div>
        )}

        <img className="food-item-img" src={image} alt={name} />
        {!cartItems[id] || cartItems[id] === 0 ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from Cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add to Cart"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className={"food-item-name-rating"}>
          <p>{name}</p>

          {/* <img src={assets.rating_starts} alt="Rating" /> */}
          <p className={`food-mins ${getClassName()}`}>{mins}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
