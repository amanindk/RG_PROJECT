import React, { useContext, useState } from "react";
import "./ProductDetails.css";
// React Icon
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import Shopcategory from "../../Pages/Shopcategory";

function ProductDetails(props) {
  const { product } = props;
  const { addToCart, addlike } = useContext(ShopContext);
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState("");
  const [userReview, setUserReview] = useState("");
  const handleSubmitReview = () => {
    if (userRating && userReview) {
      const newReview = { rating: userRating, review: userReview };
      setReviews([...reviews, newReview]);
      setUserRating("");
      setUserReview("");
    } else {
      alert("Please provide both rating and review.");
    }
  };

  return (
    <>
      {/* single Product------------------------------------------------------------------------------------------- */}
      <div className="Singleproduct_carddata">
        {/* singleproduct_img-------------------------------------------------------------------------------------- */}
        <div
          className="singleproduct_img"
          style={{ position: "sticky", top: "200px" }}
        >
          <div className="singleproduct_heart">
            <span>
              {/* <FaHeart className="liked unliked" /> */}
              <FaHeart
                className={liked ? "liked" : "unliked"}
                onClick={toggleLike}
                // onClick={() => {
                //   addlike(product.id);
                // }}
                // onClick={addlike()}
              />
            </span>
            {/* <p>{liked ? "You liked this!" : "Click the heart to like."}</p> */}
          </div>

          <img
            src={product.image}
            alt=""
            style={{
              height: "250px",
              width: "250px",
              position: "sticky",
              top: "130px",
            }}
          />
        </div>
        {/* singleproduct_detail--------------------------------------------------------------------------------- */}
        <div className="singleproduct_detail">
          <div className="singleproduct_name">
            <h3>{product.name}</h3>
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
                {product.new_price}
              </h4>
            </span>
            <span style={{ color: "#757575", marginLeft: "10px" }}>
              <h6>
                <del>
                  <LuIndianRupee />
                  {product.old_price}
                </del>
              </h6>
            </span>
            <span
              style={{
                color: "#cf3132",
                marginLeft: "5px",
                fontWeight: "700",
              }}
            >
              {" "}
              <h6>{product.discount}OFF</h6>
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
            <button
              className="singleProductbtn"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              Add Cart
            </button>
            <Link to={product.check}>
              {" "}
              <button className="singleProductbtn">Buy</button>
            </Link>
            <div className="freedelivery">
              <p>
                <TbTruckDelivery style={{ fontSize: "20px" }} /> Free delivery
                Available
              </p>
            </div>
          </div>
          {/* Product Details ------------------------------------------------------------------------------------- */}
          <div className="productdet_information">
            <h4>Product Details</h4>
            <table style={{ width: "100%" }}>
              <tr>
                <td>Brand</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td>Model Name </td>
                <td>{product.model}</td>
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
          <div className="single-cart">
            {/* Cart details... */}

            {/* Review Form */}
            <div className="reviewheading">
              <p>Review & Rating</p>
            </div>
            <div className="review-form">
              <textarea
                className="reviewinput"
                placeholder="Write your review..."
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
              />
              <input
                className="ratinginput"
                type="number"
                placeholder="Rating Number"
                value={userRating}
                min="1"
                max="5"
                onChange={(e) => setUserRating(e.target.value)}
              />
              <button className="reviewbutton" onClick={handleSubmitReview}>
                Submit
              </button>
            </div>

            {/* Display Reviews */}
            <div className="reviews">
              {reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <h3
                    style={{
                      color: "#DC9925",
                      display: "flex",
                    }}
                  >
                    {review.rating} <FaStar />
                  </h3>
                  <p>{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {}
      <Shopcategory category="fashion" />
    </>
  );
}

export default ProductDetails;
