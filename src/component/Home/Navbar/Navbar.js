import React, { useState } from "react";
// import React from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Navbar2 from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import rgshine_logo from "../Navbar/rgshine_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

// import { FaBars } from "react-icons";

function Navbarr() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <Navbar expand="lg" className=" sticky-top  bg-body-tertiary">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Link to="/">
            <img src={rgshine_logo} alt="" style={{ height: "50px" }} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 mx-5 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Link to="/" className="" style={{ color: "#0046ba" }}>
                Home
              </Link>

              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Solvent cleaners
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  RGShine Bathroom Cleaner
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  RGShine Bathroom Cleaner
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  RGShine Bathroom Cleaner
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  RGShine Bathroom Cleaner
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Glass cleaners
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  RG Shine Lemon Cleaner
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  RG Shine Handwash
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/about" href="#action2">
                About
              </Link>
              <Nav.Link href="#action2">Help</Nav.Link>
            </Nav>
            <Form className="search d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="searchbutton">Search</Button>
            </Form>
            <div className="icon">
              <div className="bell" style={{ marginRight: "25px" }}>
                <i
                  class="fa-regular fa-bell"
                  style={{ color: "#0046ba", fontSize: "22px" }}
                ></i>
              </div>
              <div className="heart" style={{ marginRight: "25px" }}>
                <i
                  class="fa-regular fa-heart"
                  style={{ color: "#0046ba", fontSize: "22px" }}
                ></i>
              </div>
              <div className="buy">
                <IoCartOutline style={{ color: "#0046ba", fontSize: "26px" }} />

                <div className="buy_no">0</div>
              </div>

              <div className="sign dropdown">
                <div className="dropbtn">Sign In</div>
                <div class="dropdown-content">
                  <div className="profile">
                    <div className="usericon">
                      <i
                        class="fa-solid fa-user"
                        style={{ color: "#0046ba", fontSize: "30px" }}
                      ></i>
                    </div>
                    <Link to="/register" className="login">
                      <span>Login/Register</span>
                    </Link>
                  </div>
                  <a href="/">My Order</a>
                  <a href="/">My Return</a>
                  <a href="/">Wishlist</a>
                  <a href="/">My Profile</a>
                  <a href="/">My Chat</a>
                  <a href="/">My Feedback</a>
                  <a href="/">Help & Support</a>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar2 className="Navbar2">
        <div className="category">
          <a href="/">Glass cleaners</a>
          <a href="/">Dish Soap</a>
          <a href="/">Disinfectant</a>
          <a href="/">Floor cleaners</a>
          <a href="/">Home Fragrances</a>
          <a href="/">Bathroom cleaners</a>
        </div>
        <div className="baricon">
          <i class="fa-solid fa-bars"></i>
        </div>
      </Navbar2> */}

      <nav className="main-nav">
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Cleaner</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                    <div className="row-2">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Dish Soap</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                    <div className="row-2">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Bathroom Cleaner</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                    <div className="row-2">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Disinfectant</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                    <div className="row-2">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Home Fragrances</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                    <div className="row-2">
                      <a href="#">Floor Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                      <a href="#">Glass Cleaner</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbarr;
