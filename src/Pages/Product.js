import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../component/Breadcrums/Breadcrums";
import Productdetails from "../component/ProductDetails/ProductDetails";
function Product() {
  const { All_product } = useContext(ShopContext);
  // const { Productdata } = useContext(ShopContext);
  const { productId } = useParams();
  const product = All_product.find((e) => e.id === Number(productId));
  // const product = Productdata.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <Productdetails product={product} />
    </div>
  );
}

export default Product;
