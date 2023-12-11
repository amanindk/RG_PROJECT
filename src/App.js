import React, { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Home/Navbar/Navbar";
import Login from "./component/LoginRegister/Login";
import Register from "./component/LoginRegister/Register";

//Pages Import
import Home from "./Pages/Home";
import Productdetail from "./Pages/Productdetail";
import About from "./Pages/About";
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
        <Route path="/productdetail" element={<Productdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
