import React from "react";
import "./Breadcrums.css";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrums(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <IoIosArrowForward /> other <IoIosArrowForward />
      {product.category}
      <IoIosArrowForward />
      {product.name}
    </div>
  );
}

export default Breadcrums;
