import React from "react";
import "./Footer.css";
import rgshine_logo from "./rgshine_logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo_components">
          <div className="logo_details">
            <div className="logo">
              <img src={rgshine_logo} alt="" style={{ height: "50px" }} />
              <h4
                style={{
                  marginLeft: "7px",
                  color: "#0046ba",
                  fontWeight: "700",
                }}
              >
                RGSHINE
              </h4>
            </div>
            <div className="companydetails">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                facere quis deserunt, totam non, eveniet quos pariatur dolor
                nihil ad quasi animi, labore exercitationem corrupti odio eos.
                Saepe, voluptate aliquam.
              </p>
            </div>
          </div>
          <div className="components">
            <div className="componentsname">
              <div className="footercompname">
                <h4>Company</h4>
              </div>
              <div className="footercomp_category">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Order</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="componentsname">
              <div className="footercompname">
                <h4>Products</h4>
              </div>
              <div className="footercomp_category">
                <ul>
                  <li>
                    <a href="">Glass Cleaners</a>
                  </li>
                  <li>
                    <a href="">Dish Soap</a>
                  </li>
                  <li>
                    <a href="">Disinfectant</a>
                  </li>
                  <li>
                    <a href="">Floor Cleaners</a>
                  </li>
                  <li>
                    <a href="">Home Fragrances</a>
                  </li>
                  <li>
                    <a href="">Bathroom Cleaners</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="componentsname">
              <div className="footercompname">
                <h4>Network</h4>
              </div>
              <div className="footercomp_category">
                <ul>
                  <li>
                    <a href="">Dialkro</a>
                  </li>
                  <li>
                    <a href="">Digitalsol</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="componentsname">
              <div className="footercompname">
                <h4>Social Media</h4>
              </div>
              <div className="footercomp_category">
                <ul>
                  <li>
                    <FaFacebookF className="footericon" />
                    <a href="https://www.facebook.com/Rgshine11/">Facebook</a>
                  </li>
                  <li>
                    <FaInstagram className="footericon" />
                    <a href="https://www.instagram.com/rgshine11/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg==">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <FaTwitter className="footericon" />
                    <a href="">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
