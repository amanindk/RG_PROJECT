import React from "react";
import "./Popular.css";
import product_card from "../Assets/Productdata";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular">
      <div className="popular-item">
        {product_card.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              new_price={item.new_price}
              old_price={item.old_price}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
