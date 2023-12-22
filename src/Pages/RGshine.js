import React from "react";
import Template from "../component/Home/Template/Template";
// import Shopcategory from "./Shopcategory";
import Multicardslider from "../component/Home/Multicardslider/Multicardslider";
// import Popular from "../component/Home/Popular/Popular";
import APIcard from "../component/Home/APIcard/APIcard";
import Footer from "../component/Footer/Footer";

function RGshine() {
  return (
    <>
      <Template />;
      {/* <Popular />
      <Shopcategory /> */}
      <Multicardslider />
      <APIcard />
      <Footer />
    </>
  );
}

export default RGshine;
