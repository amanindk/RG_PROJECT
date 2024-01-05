import React, { useState } from "react";
import "./Item.css";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Item(props) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };
  return (
    <div className="item">
      <FaHeart className={liked ? "liked" : "unliked"} onClick={toggleLike} />
      <Link to={`/product/${props.id}`}>
        {" "}
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
          style={{
            width: "200px",
            height: "200px",
          }}
        />
      </Link>
      <div className="product_details">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <div className="item-prices">
          <div className="item-prices-new">
            <LuIndianRupee />
            {props.new_price}
          </div>
          <div className="item-prices-old">
            <del>
              <LuIndianRupee />
              {props.old_price}
            </del>
          </div>
          <div className="discount">{props.discount}OFF</div>
        </div>
        <button className="addtocartbutton">{props.check}</button>
      </div>
    </div>
  );
}

export default Item;
