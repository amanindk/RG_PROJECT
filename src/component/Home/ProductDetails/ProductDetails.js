import React from "react";
import "./ProductDetails.css";
import toiletpng from "./toiletpng.png";
// React Icon
import { FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";

function ProductDetails() {
  return (
    <>
      {/* single Product------------------------------------------------------------------------------------------- */}
      <div className="Singleproduct_carddata">
        {/* singleproduct_img-------------------------------------------------------------------------------------- */}
        <div className="singleproduct_img">
          <div className="singleproduct_heart">
            <span>
              <a href="/">
                <FaRegHeart style={{ color: "#bebebe" }} />
              </a>
            </span>
          </div>
          <a href="/">
            <img
              src={toiletpng}
              alt=""
              style={{
                height: "350px",
                width: "250px",
              }}
            />
          </a>
        </div>
        {/* singleproduct_detail--------------------------------------------------------------------------------- */}
        <div className="singleproduct_detail">
          <div className="singleproduct_name">
            <h3>RGSHINE Toliet Cleaner Regular Liquid Toilet Cleaner</h3>
          </div>
          {/* singleproduct_rating-------------------------------------------------------------------------------- */}
          <div className="singleproduct_rating">
            <span
              style={{
                color: "#DC9925",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <b>4.7</b>
              <FaStar style={{ marginLeft: "5px" }} />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </div>
          {/* singleproduct_price--------------------------------------------------------------------------------- */}
          <div className="singleproduct_price">
            <span>
              <h4>
                <LuIndianRupee />
                139
              </h4>
            </span>
            <span style={{ color: "#757575", marginLeft: "10px" }}>
              <h6>
                MRP:
                <del>
                  <LuIndianRupee />
                  199
                </del>
              </h6>
            </span>
            <span style={{ color: "#0046ba", marginLeft: "5px" }}>
              {" "}
              <h6>40% off</h6>
            </span>
          </div>
          {/* alltaxe---------------------------------------------------------------------------------------- */}
          <div className="alltaxe">
            <p style={{ color: "#757575" }}>Inclusive of all taxes</p>
          </div>
          <hr style={{ width: "50%" }} />
          <div className="cashondelivery">
            <p style={{ display: "flex", alignItems: "center" }}>
              <GiCheckMark style={{ color: "#0046ba", marginRight: "5px" }} />
              Cash on Delivery Available
            </p>
          </div>
          <div className="paymentoption">
            <p>
              <CiMoneyCheck1 style={{ fontSize: "20px", color: "#0046ba" }} />{" "}
              Payment Option:(Credit Card , Debit Card , Net Banking , Wallets )
            </p>
          </div>
          <div className="btn_freedelivery">
            <button className="singleProductbtn">Shop Now</button>
            <div className="freedelivery">
              <p>
                <TbTruckDelivery style={{ fontSize: "20px" }} /> Free Delivery
              </p>
            </div>
          </div>
          {/* Product Details ------------------------------------------------------------------------------------- */}
          <div className="productdet_information">
            <h4>Product Details</h4>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Brand</td>
                <td>RGShine</td>
              </tr>
              <tr>
                <td>Model Name </td>
                <td>Toilet Cleaner</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>500ml</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Container Type</td>
                <td>Bottle</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
