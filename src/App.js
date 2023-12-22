import React, { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Login from "./component/LoginRegister/Login";
import Register from "./component/LoginRegister/Register";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import RGshine from "./Pages/RGshine";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            currentForm === "Login" ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/mobile" element={<Shopcategory category="mobile" />} />
        <Route path="/fashion" element={<Shopcategory category="fashion" />} />
        <Route path="/cleaner" element={<Shopcategory category="cleaner" />} />
        <Route path="/sports" element={<Shopcategory category="sports" />} />
        <Route
          path="/electronic"
          element={<Shopcategory category="electronic" />}
        />
        <Route path="/kitchen" element={<Shopcategory category="kitchen" />} />

        <Route path="/rgshine" element={<RGshine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
