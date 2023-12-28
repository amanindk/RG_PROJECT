import React, { createContext, useState } from "react";
import All_product from "../component/Assets/All_product";
// import Product from "../Pages/Product";
// import cartItems from "../component/CartItems/CartItems";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < All_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const addlike = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removelike = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = All_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  // const like = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   console.log(cartItems);
  // };
  // const unlike = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  const contextValue = {
    addlike,
    getTotalCartItems,
    getTotalCartAmount,
    All_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
