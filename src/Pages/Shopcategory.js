import React, { useContext } from "react";
import "./Shopcategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../component/Item/Item";
function Shopcategory(props) {
  const { All_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory_head">
        <h2>Branded Item</h2>
      </div>
      <div className="shopcategory-indexsort">
        <div className="shopcategory-product">
          {All_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  discount={item.discount}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Shopcategory;
