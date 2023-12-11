import React, { Component } from "react";
import "./APIcard.css";
import product_card from "./APIcard_data";
import Slider from "react-slick";

//product items
console.log(product_card);
const listItems = product_card.map((item) => (
  <div className="productcard" key={item.id}>
    <div className="card" style={{ width: "18rem", margin: "20px" }}>
      <img
        src={item.thumb}
        alt="RGshine"
        style={{ height: "200px", width: "200" }}
      />
      <div className="all_productcard_detail">
        <div className="all_product-name">
          <h3>{item.product_name}</h3>
        </div>
        <div className="all_product_description">
          <p>{item.description}</p>
        </div>
        <p className="all_product_price">
          <span>{item.currency}</span>
          {item.price}{" "}
          <span style={{ fontSize: "15px" }}>
            <del style={{ color: "#878787", marginLeft: "2px" }}>
              {item.currency}
              {item.cutprice}
            </del>
          </span>
          <h5 style={{ color: "#0046ba", marginLeft: "7px" }}>
            {item.discount}
          </h5>
        </p>
        <button
          className="offerbtn"
          type="button"
          onclick="alert('Hello world!')"
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
));
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="allproductslider">
        <div className="allproduct">
          <h3>All Products</h3>
        </div>
        <Slider {...settings}>{listItems}</Slider>
      </div>
    );
  }
}
