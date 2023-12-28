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
        <button
          to="https://www.amazon.in/Vibez-Smartwatch-Additional-Bluetooth-Assitance/dp/B0C74DP5KT?content-id=amzn1.sym.10447c6b-3f84-4df3-b999-01a8bbbf010e%3Aamzn1.sym.10447c6b-3f84-4df3-b999-01a8bbbf010e&crid=C18KGLNKKMDB&cv_ct_cx=watches+for+girls&keywords=watches+for+girls&pd_rd_i=B0C74DP5KT&pd_rd_r=4f01ca03-f28b-4cfc-a4bc-a9aa551e81ff&pd_rd_w=3wcMx&pd_rd_wg=IlrW1&pf_rd_p=10447c6b-3f84-4df3-b999-01a8bbbf010e&pf_rd_r=6MEEFVFJPDY1MKV55J5Z&qid=1703759046&s=apparel&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=watchs%2Capparel%2C219&sr=1-1-b614a050-8d70-4320-9c19-cc457ab2a351&linkCode=ll1&tag=premkumar730-21&linkId=7c66716626466a1e426ed2a7c595f253&language=en_IN&ref_=as_li_ss_tl"
          className="addtocart"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
