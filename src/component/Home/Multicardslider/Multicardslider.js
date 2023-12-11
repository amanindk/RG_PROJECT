import "./Multicardslider.css";
import React, { Component } from "react";
import Slider from "react-slick";
//offers image
import offers1 from "./offers1.jpg";
import offers2 from "./offers2.jpg";
import offers3 from "./offers3.jpg";
import offers4 from "./offers4.jpg";

// icon
import { LuIndianRupee } from "react-icons/lu";

//combo images
import combo1 from "./combo1.jpg";
import combo2 from "./combo2.jpg";
import combo3 from "./combo3.jpg";
import combo4 from "./combo4.jpg";
import combo5 from "./combo5.jpg";
import combo6 from "./combo6.jpg";
import combo7 from "./combo7.jpg";
import combo8 from "./combo8.jpg";
import combo9 from "./combo9.jpg";
import combo10 from "./combo10.jpg";
import combo12 from "./combo11.jpg";
import combo11 from "./combo12.jpg";
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
      // Slider------------------------------------------------------------------------------------------------
      <div className="slider">
        <div className="latestoffer">
          <h3>Latest Offers</h3>
        </div>
        {/* Offer card start------------------------------------------------------------------------------------------- */}
        <div className="container">
          <div className="row  row-cols-md-4 g-4">
            {/* 1st start--------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers1}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="cardname">
                    <h4>Bathroom,kitchen & Glass Cleaner</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 2nd start ---------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers2}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Wet Mops & Stainless Steel Scrubber</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 3rd start ------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers3}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 4th start ---------------------------------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers4}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Kitchen Dish Scrubber</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 5th start--------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers1}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Bathroom,kitchen & Glass Cleaner</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 6th start ---------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers2}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Wet Mops & Stainless Steel Scrubber</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 7th start ------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers3}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
            {/* 8th start ---------------------------------------------------------------------------------------------------------------- */}
            <div className="col  md-3">
              <div className="card h-100">
                <div className="offercardimg">
                  <img
                    src={offers4}
                    alt="..."
                    style={{ height: "170px", width: "170px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <h4>Kitchen Dish Scrubber</h4>
                  </h5>
                  <div className="offerdetail">
                    <h5>
                      <LuIndianRupee />
                      299
                    </h5>
                    <span style={{ fontSize: "15px" }}>
                      <del style={{ color: "#878787", marginLeft: "2px" }}>
                        <LuIndianRupee />
                        599
                      </del>
                    </span>
                    <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                      {" "}
                      50% off
                    </h5>
                  </div>
                  <div className="">
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
            </div>
          </div>
        </div>
        {/* Offer card ending--------------------------------------------------------------------------------------------------- */}
        {/* Combo Offer start---------------------------------------------------------------------------------------------------- */}
        <div className="combo">
          <h3>Combo Offer</h3>
        </div>
        {/* slick card slider -------------------------------------------------------------------------------------------------- */}
        <Slider {...settings}>
          {/* combo card start\-------------------------------------------------------------------------------------------------- */}
          {/* 1st Combo card ----------------------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo1}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 2nd Combo card------------------------------------------------------------------------------------------ */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo2}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 3rd Combo card ----------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo3}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 4th Combo card----------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo4}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 5th Combo card------------------------------------------------------------------------------------------ */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo5}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 6th Combo card------------------------------------------------------------------------------------------ */}
          <div className="col  md-3">
            <div className="card">
              <div className="offercardimg">
                <img
                  src={combo6}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 7th Combo card----------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo7}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 8th Combo card ------------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo8}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 9th Combo card */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo9}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 10th Combo card ------------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo10}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 11th Combo card */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo11}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* 12th Combo card ----------------------------------------------------------------------------------------------------- */}
          <div className="col  md-3">
            <div className="card h-100">
              <div className="offercardimg">
                <img
                  src={combo12}
                  alt="..."
                  style={{ height: "170px", width: "170px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <h4>Bathroom Cleaner, Gloves & Mini Wiper</h4>
                </h5>
                <div className="offerdetail">
                  <h5>
                    <LuIndianRupee />
                    299
                  </h5>
                  <span style={{ fontSize: "15px" }}>
                    <del style={{ color: "#878787", marginLeft: "2px" }}>
                      <LuIndianRupee />
                      599
                    </del>
                  </span>
                  <h5 style={{ color: "#0046ba", marginLeft: "10px" }}>
                    {" "}
                    50% off
                  </h5>
                </div>
                <h5
                  style={{
                    color: "#d7a022",
                    marginLeft: "0px",
                    fontSize: "17px",
                  }}
                >
                  {" "}
                  Combo offer
                </h5>
                <div className="">
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
          </div>
          {/* ending combo card-------------------------------------------------------------------------------------------- */}
        </Slider>
      </div>
    );
  }
}
