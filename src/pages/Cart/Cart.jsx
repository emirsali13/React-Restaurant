import { useContext, useState, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(0); // State to hold discounted amount
  const isEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  // Calculate subtotal whenever cartItems or food_list change
  let subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      return acc + item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  // Function to handle discount calculation
  const handleDiscount = () => {
    if (promoCode === "LavintaPizza2024") {
      // Apply 20% discount
      const discountAmount = subtotal * 0.2;
      setDiscountedAmount(discountAmount); // Update state with discounted amount
      alert("You have applied the discount!!");
    } else {
      setDiscountedAmount(0); // Reset discount amount if promo code is not valid
    }
  };

  // Effect to update discount when cart items change
  useEffect(() => {
    handleDiscount(); // Recalculate discount whenever cartItems change
  }, [cartItems]);

  if (isEmpty) {
    return (
      <div className="empty-cart">
        <h1>
          <span>Cart is empty, </span>
          <Link to="/home" className="home-link">
            click
          </Link>
          <span> to add food</span>
        </h1>
      </div>
    );
  }

  const deliveryFee = 2; // assuming delivery fee is fixed
  const total = subtotal + deliveryFee - discountedAmount; // Include discount in total calculation

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p className="title">Title</p>
          <p>Price</p>
          <p className="quantity-text">Quantity</p>
          <p>Total</p>
          <p className="remove-text">Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <div className="mobile-img">
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="mobile-cross"
                    >
                      X
                    </p>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="mobile-quantity">
                    <p>
                      {item.name} - {cartItems[item._id]}x
                    </p>
                  </div>
                  <p className="item-name">{item.name}</p>
                  <p>${item.price}</p>
                  <p className="quantity">{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-promocode">
          <div>
            <p>Enter promo code for discount!</p>
            <div className="cart-promocode-input">
              <input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                type="text"
                placeholder="Promo Code"
              />
              <button onClick={handleDiscount}>Get Discount</button>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Discounted Amount</p>
              <p>${discountedAmount.toFixed(2)}</p>{" "}
              {/* Display discounted amount */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button className="checkoutBtn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
