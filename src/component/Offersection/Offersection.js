import React from "react";
import "./Offersection.css";
import offersection from "./offersection.png";
function Offersection() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={offersection} alt="" />
      </div>
    </div>
  );
}

export default Offersection;
