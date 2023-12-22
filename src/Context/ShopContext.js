import React, { createContext } from "react";
import All_product from "../component/Assets/All_product";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { All_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
