import React, { useContext, useState } from "react";
// import React from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Navbar2 from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import rgshine_logo from "../Navbar/rgshine_logo.png";
import Dial2shop from "./Dail2shop.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

// import { FaBars } from "react-icons";

function Navbarr() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <Navbar expand="lg" className=" sticky-top  bg-body-tertiary">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Link to="/">
            <img src={Dial2shop} alt="" style={{ height: "53px" }} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 mx-5 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Link
                to="/"
                className=""
                style={{ color: "black", fontWeight: "600" }}
              >
                Home
              </Link>

              <NavDropdown title="Category" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/mobile">Mobile&More</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/fashion">Fashion</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/cleaner">Cleaners</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/sports">Sports</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/electronic">Electronics</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/kitchen">Home&Kitchen</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/about">About</Link>
              {/* <Link to="/All_product">Other</Link> */}
              <Link to="/rgshine">RGShine</Link>
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
              {/* <div className="bell" style={{ marginRight: "25px" }}>
                <i
                  class="fa-regular fa-bell"
                  style={{ color: "#ca3332", fontSize: "22px" }}
                ></i>
              </div> */}
              <div className="heart" style={{ marginRight: "25px" }}>
                <Link to="/wishlist">
                  <FaRegHeart className="wishheart" />
                </Link>
              </div>
              <div className="buy">
                <Link to="/cart">
                  <IoCartOutline
                    style={{ color: "#ca3332", fontSize: "26px" }}
                  />
                  <div className="buy_no">{getTotalCartItems()}</div>
                </Link>
              </div>

              <div className="sign dropdown">
                <div className="dropbtn">Sign In</div>
                <div class="dropdown-content">
                  <div className="profile">
                    <div className="usericon">
                      <FaRegUser
                        style={{ color: "#ca3332", fontSize: "32px" }}
                      />
                    </div>
                    <Link to="/register" className="login">
                      <span>Login/Register</span>
                    </Link>
                  </div>
                  <a href="/">My Order</a>
                  <a href="/">My Return</a>
                  <Link to="/wishlist">Wishlist</Link>
                  <a href="/">My Profile</a>
                  {/* <a href="/">My Chat</a> */}
                  <a href="/">My Feedback</a>
                  <a href="/">Help & Support</a>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <nav className="main-nav">
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Mobile & More</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <p href="#">Smartphone&Tablet</p>
                      <div className="head_cat">
                        <a href="#">IPhone</a>
                        <a href="#">I kall</a>
                        <a href="#">Realme</a>
                        <a href="#">Samsung</a>
                        <a href="#">Vivo</a>
                        <a href="#">Oppo</a>
                        <a href="#">Nokia</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Feature Phone</p>
                      <div className="head_cat">
                        <a href="#">Nokia</a>
                        <a href="#">Redme</a>
                        <a href="#">Blackberry</a>
                        <a href="#">jio</a>
                        <a href="#">Motto</a>
                        <a href="#">Other</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Laptops</p>
                      <div className="head_cat">
                        <a href="#">Dell</a>
                        <a href="#">HP</a>
                        <a href="#">Jio Mack</a>
                        <a href="#">Apple</a>
                        <a href="#">Lenovo</a>
                        <a href="#">Samsung</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Technology</p>
                      <div className="head_cat">
                        <a href="#">Mouse</a>
                        <a href="#">keyboard</a>
                        <a href="#">CPU</a>
                        <a href="#">Wireless product</a>
                        <a href="#">Attendence Machine</a>
                        <a href="#">charger</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Storage Devices</p>
                      <div className="head_cat">
                        <a href="#">Memory Card</a>
                        <a href="#">Pen Drive</a>
                        <a href="#">External Hard Disk</a>
                      </div>
                      <p href="#">Best sellers Accessories</p>
                      <div className="head_cat">
                        <a href="#">Power Bank </a>
                        <a href="#">Cases&Covers</a>
                        <a href="">Adapters</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Fashion</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <p href="#">Men</p>
                      <div className="head_cat">
                        <a href="#">Jackets</a>
                        <a href="#">Shirts</a>
                        <a href="#">Pents</a>
                        <a href="#">Jeans</a>
                        <a href="#">T-Shirts</a>
                        <a href="#">Cargos</a>
                        <a href="">Trouser</a>
                        <a href="">Men Shoes</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Women</p>
                      <div className="head_cat">
                        <a href="#">Top</a>
                        <a href="#">Kurtas&Kurtis</a>
                        <a href="#">Sarrees</a>
                        <a href="#">Lehangas & Party</a>
                        <a href="#">Shoes</a>
                        <a href="#">Juti</a>
                        <a href="">Jeans</a>
                        <a href="">Formal Shoes</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Watches</p>
                      <div className="head_cat">
                        <a href="#">Combo Watches</a>
                        <a href="#">Couple Watch</a>
                        <a href="#">Smart Watch</a>
                        <a href="#">Women Watch</a>
                        <a href="#">Men Watch</a>
                        <a href="#">Belt</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Clothes</p>
                      <div className="head_cat">
                        <a href="#">Shocks</a>
                        <a href="#">Turban</a>
                        <a href="#">Maffar Scrap</a>
                        <a href="#">Gloves</a>
                        <a href="">Jacket</a>
                        <a href="">Winter Wear</a>
                        <a href=""></a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Beauty&Perfums</p>
                      <div className="head_cat">
                        <a href="#">Skin Care</a>
                        <a href="#">Make-Up</a>
                        <a href="#">Hair Care</a>
                        <a href="#">Personal Care & Grooming</a>
                        <a href="">Beauty Accessories</a>
                        <a href="">Bath Essentials</a>
                        <a href="">Oral Care</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Cleaners</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <p href="#">RGShine Cleaners</p>
                      <div className="head_cat">
                        <a href="#">Glass Cleaner</a>
                        <a href="#">Floor Cleaner</a>
                        <a href="#">Hand Washer</a>
                        <a href="#">Dish Wash</a>
                        <a href="">Disinfectant Cleaner</a>
                        <a href="#">Toilet Cleaner</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">RGShine Freshner</p>
                      <div className="head_cat">
                        <a href="#">Room Freshner</a>
                        <a href="#">Phenol</a>
                        <a href="#">Dish Wash Liquid</a>
                        <a href="#">Liquid Saop</a>
                        <a href="#">Dishwash Gell</a>
                        <a href="#">Lemon Grass</a>
                        <a href="#">Glass Cleaner</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Home Improvment</p>
                      <div className="head_cat">
                        <a href="#">Brooms</a>
                        <a href="#">Dustbins</a>
                        <a href="#">Mops</a>
                        <a href="#">Scrubber</a>
                        <a href="#">Toilet Brush</a>
                        <a href="#">Clothes Brush</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Other</p>
                      <div className="head_cat">
                        <a href="#">Wipper</a>
                        <a href="#">Cleaning Gloves </a>
                        <a href="#">Vacuum cleaner</a>
                        <a href="#">Dry Brush</a>
                        <a href="#">Cleaning Tool</a>
                        <a href="#">Plastic Broom Holder </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Sports&More</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <p href="#">Sports</p>
                      <div className="head_cat">
                        <a href="#">Cricket Kit</a>
                        <a href="#">Football</a>
                        <a href="#">Carrom board</a>
                        <a href="#">Bat</a>
                        <a href="#">Hockey</a>
                        <a href="#">Sports Gloves</a>
                        <a href="">Badminton</a>
                        <a href="">Basketball</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Toys</p>
                      <div className="head_cat">
                        <a href="#">Soft Toy</a>
                        <a href="#">Board Game</a>
                        <a href="#">Puzzles</a>
                        <a href="#">Learning & Education Toy</a>
                        <a href="#">Baby Toy</a>
                        <a href="#">Gifting Toy</a>
                        <a href=""></a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Food & Drinks</p>
                      <div className="head_cat">
                        <a href="#">Nuts & Dry Fruits</a>
                        <a href="#">Cooking Essentials</a>
                        <a href="#">Breakfast Items</a>
                        <a href="#">jams,Honey</a>
                        <a href="#">Snacks Corner</a>
                        <a href="#">Gifting Toy</a>
                        <a href=""></a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Stationary</p>
                      <div className="head_cat">
                        <a href="#">Pen & Pencils</a>
                        <a href="">Notebook & Dairy</a>
                        <a href="">Calculator</a>
                        <a href="">Others</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Nutrition & Health Care</p>
                      <div className="head_cat">
                        <a href="#">Masks</a>
                        <a href="#">Ayurvadic Supplements</a>
                        <a href="#">Vitamin Supplements</a>
                        <a href="#">Protein Supplements</a>
                        <a href="#">Health Drinks</a>
                        <a href="#">Home Medicine</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Electronics</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <p>Cameras & Accessories</p>
                      <div className="head_cat">
                        <a href="#">DSLR</a>
                        <a href="#">Glass Cleaner</a>
                        <a href="#">Glass Cleaner</a>
                        <a href="#">Glass Cleaner</a>
                        <a href="#">Glass Cleaner</a>
                        <a href="#">Glass Cleaner</a>
                        <a href="#">Glass Cleaner</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Smartphone&Tablet</p>
                      <div className="head_cat">
                        <a href="#">IPhone</a>
                        <a href="#">I kall</a>
                        <a href="#">Realme</a>
                        <a href="#">Samsung</a>
                        <a href="#">Vivo</a>
                        <a href="#">Oppo</a>
                        <a href="#">Nokia</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Feature Phone</p>
                      <div className="head_cat">
                        <a href="#">Nokia</a>
                        <a href="#">Redme</a>
                        <a href="#">Blackberry</a>
                        <a href="#">jio</a>
                        <a href="#">Motto</a>
                        <a href="#">Other</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Laptops</p>
                      <div className="head_cat">
                        <a href="#">Dell</a>
                        <a href="#">HP</a>
                        <a href="#">Jio Mack</a>
                        <a href="#">Apple</a>
                        <a href="#">Lenovo</a>
                        <a href="#">Samsung</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Technology</p>
                      <div className="head_cat">
                        <a href="#">Mouse</a>
                        <a href="#">keyboard</a>
                        <a href="#">CPU</a>
                        <a href="#">Wireless product</a>
                        <a href="#">Attendence Machine</a>
                        <a href="#">charger</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="category_dropdown">
                <a class="category_dropbtn">Home & Kitchen</a>
                <div class="category_dropdown-content">
                  <div className="dropdown_category-row">
                    <div className="row_1">
                      <p href="#">Smartphone&Tablet</p>
                      <div className="head_cat">
                        <a href="#">IPhone</a>
                        <a href="#">I kall</a>
                        <a href="#">Realme</a>
                        <a href="#">Samsung</a>
                        <a href="#">Vivo</a>
                        <a href="#">Oppo</a>
                        <a href="#">Nokia</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Feature Phone</p>
                      <div className="head_cat">
                        <a href="#">Nokia</a>
                        <a href="#">Redme</a>
                        <a href="#">Blackberry</a>
                        <a href="#">jio</a>
                        <a href="#">Motto</a>
                        <a href="#">Other</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Laptops</p>
                      <div className="head_cat">
                        <a href="#">Dell</a>
                        <a href="#">HP</a>
                        <a href="#">Jio Mack</a>
                        <a href="#">Apple</a>
                        <a href="#">Lenovo</a>
                        <a href="#">Samsung</a>
                      </div>
                    </div>
                    <div className="row_1">
                      <p href="#">Technology</p>
                      <div className="head_cat">
                        <a href="#">Mouse</a>
                        <a href="#">keyboard</a>
                        <a href="#">CPU</a>
                        <a href="#">Wireless product</a>
                        <a href="#">Attendence Machine</a>
                        <a href="#">charger</a>
                      </div>
                    </div>
                    <div className="row-2">
                      <p href="#">Storage Devices</p>
                      <div className="head_cat">
                        <a href="#">Memory Card</a>
                        <a href="#">Pen Drive</a>
                        <a href="#">External Hard Disk</a>
                      </div>
                      <p href="#">Best sellers Accessories</p>
                      <div className="head_cat">
                        <a href="#">Power Bank </a>
                        <a href="#">Cases&Covers</a>
                        <a href="">Adapters</a>
                      </div>
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
