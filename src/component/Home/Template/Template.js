import React from "react";
import "./Template.css";
import Carousel from "react-bootstrap/Carousel";
import Temp1 from "../Template/Temp1.jpg";
import Temp2 from "../Template/Temp2.jpg";
import Temp3 from "../Template/Temp3.jpg";
import Temp4 from "../Template/Temp4.jpg";
import allproduct from "./allproduct.png";
import Rgshinevideo from "./Rgshinevideo.mp4";

function Template() {
  return (
    <>
      <div className="Template_offer">
        <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <img src={Temp1} className=" w-100" alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={Temp2} className=" w-100" alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Temp3} className=" w-100" alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Temp4} className=" w-100" alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="video_productimage">
          <video width={200} controls autoPlay={true}>
            <source src={Rgshinevideo} type="video/mp4" />
          </video>
          <div className="productimage">
            <a href="#">
              {" "}
              <img
                src={allproduct}
                style={{ height: "auto", width: "100%" }}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
