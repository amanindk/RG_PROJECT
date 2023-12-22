import React from "react";
import "./CarauselTemp.css";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../Assets/carousel1.jpg";
import carousel2 from "../Assets/carousel2.jpg";
import carousel3 from "../Assets/carousel3.jpg";
import carousel4 from "../Assets/carousel4.jpg";
function CarauselTemp() {
  return (
    <div class="Carousel-temp">
      <Carousel className="carouseltmp">
        <Carousel.Item interval={1000}>
          <img src={carousel1} className=" w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={carousel2} className=" w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel3} className=" w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel4} className=" w-100" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarauselTemp;
