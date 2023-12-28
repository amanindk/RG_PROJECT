import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { RxCross2 } from "react-icons/rx";
import { LuIndianRupee } from "react-icons/lu";
function CartItems() {
  const { getTotalCartAmount, All_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="CartItems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {All_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>
                  {" "}
                  <LuIndianRupee />
                  {e.new_price}
                </p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>
                  {" "}
                  <LuIndianRupee />
                  {e.new_price * cartItems[e.id]}
                </p>
                <RxCross2
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>
                {" "}
                <LuIndianRupee />
                {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                {" "}
                <LuIndianRupee />
                {getTotalCartAmount()}
              </h3>
            </div>
          </div>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
