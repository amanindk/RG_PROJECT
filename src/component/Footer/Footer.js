import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo_components">
          <div className="logo_details">
            <div className="logo">
              {/* <img src={rgshine_logo} alt="" style={{ height: "50px" }} /> */}
              <h4
                style={{
                  marginLeft: "7px",
                  color: "#cf3132",
                  fontWeight: "700",
                }}
              >
                DIAL2SHOPPING
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
                    <a to="/">Home</a>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a to="/">Contact us</a>
                  </li>
                  <li>
                    <a to="/">Order</a>
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
                    <a to="">Glass Cleaners</a>
                  </li>
                  <li>
                    <a to="">Dish Soap</a>
                  </li>
                  <li>
                    <a to="">Disinfectant</a>
                  </li>
                  <li>
                    <a to="">Floor Cleaners</a>
                  </li>
                  <li>
                    <a to="">Home Fragrances</a>
                  </li>
                  <li>
                    <a to="">Bathroom Cleaners</a>
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
                    <a to="">Dialkro</a>
                  </li>
                  <li>
                    <a to="">Digitalsol</a>
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
                    <a to="https://www.facebook.com/Rgshine11/">Facebook</a>
                  </li>
                  <li>
                    <FaInstagram className="footericon" />
                    <a to="https://www.instagram.com/rgshine11/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg==">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <FaTwitter className="footericon" />
                    <a to="">Twitter</a>
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
