import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Our menu</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item.name}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                mins={item.minutes}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
