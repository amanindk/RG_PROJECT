import React from "react";
import Template from "../component/Home/Template/Template";
import Multicardslider from "../component/Home/Multicardslider/Multicardslider";
// import Offercard from "../component/Home/offercard/Offercard";
import APIcard from "../component/Home/APIcard/APIcard";
import Footer from "../component/Home/Footer/Footer";

function Home() {
  return (
    <>
      <Template />;{/* <Offercard /> */}
      <Multicardslider />;
      <APIcard />
      <Footer />
    </>
  );
}

export default Home;
