import React from "react";
import Popular from "../component/Popular/Popular";
import Footer from "../component/Footer/Footer";
import CarauselTemp from "../component/CarauselTemp/CarauselTemp";
import Shopcategory from "./Shopcategory";
import Offersection from "../component/Offersection/Offersection";

function Home() {
  return (
    <>
      <CarauselTemp />
      <Shopcategory category="fashion" />
      <Offersection />
      <Popular />
      {/* <Offersection /> */}
      {/* <Multicardslider /> */}
      {/* <APIcard /> */}
      <Footer />
    </>
  );
}

export default Home;
