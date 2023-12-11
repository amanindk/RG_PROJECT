import React from "react";
import "./About.css";
import aboutimg from "./aboutimg.png";
import allproduct from "./allproduct.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="about_details">
          <div className="about_name">
            <h1 style={{ color: "#0046ba" }}>About RGShine</h1>{" "}
          </div>
          <div className="about_text">
            <p style={{ color: "#8c8f87" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dignissimos autem magni. Aspernatur, itaque molestiae. At deleniti
              commodi quod reprehenderit? Eligendi dolorum cupiditate itaque
              beatae delectus? Molestiae, perspiciatis! Assumenda, sit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dignissimos autem magni. Aspernatur, itaque molestiae. At deleniti
              commodi quod reprehenderit? Eligendi dolorum cupiditate itaque
              beatae delectus? Molestiae, perspiciatis! Assumenda, sit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dignissimos autem magni. Aspernatur, itaque molestiae. At deleniti
              commodi quod reprehenderit? Eligendi dolorum cupiditate itaque ti
              commodi quod reprehenderit? Eligendi dolorum cupiditate itaque
              beatae delectus? Molestiae, perspiciatis! Assumenda, sit.
            </p>
          </div>
        </div>
        <div className="about_img">
          <img
            src={aboutimg}
            alt=""
            style={{ height: "auto", width: "450px" }}
          />
        </div>
      </div>
      <div className="product_feature">
        <div className="about_img">
          <img
            src={allproduct}
            alt=""
            style={{ padding: "20px", height: "300px", width: "450px" }}
          />
        </div>
        <div className="productfeature_details">
          <div className="about_name">
            <h1 style={{ color: "#0046ba" }}>Cleaning Products Feature</h1>
          </div>
          <div className="about_text">
            <p style={{ color: "#8c8f87" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              corporis officiis! Rerum temporibus rem id recusandae provident
              alias nobis quia assumenda fuga, illum voluptas, at accusantium
              atque, enim libero officia. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Est, corporis officiis! Rerum
              temporibus rem id recusandae provident alias nobis quia assumenda
              fuga, illum voluptas, at accusantium atque, enim libero officia.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              corporis officiis! Rerum temporibus rem id recusandae provident
              alias nobis quia assumenda fuga, illum voluptas, at accusantium
              atque, enim libero officia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
