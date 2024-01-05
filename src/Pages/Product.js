import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../component/Breadcrums/Breadcrums";
import Productdetails from "../component/ProductDetails/ProductDetails";
// import RelatedProduct from "../component/RelatedProduct/RelatedProduct";
import Shopcategory from "./Shopcategory";
import All_product from "../component/Assets/All_product";
import Item from "../component/Item/Item";

function Product(props) {
  const { All_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = All_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <Productdetails product={product} />
      {/* <RelatedProduct product={product} /> */}

      {All_product.map((item, i) => {
        if (props.category === item.category) {
          return (
            // <Item
            //   key={i}
            //   id={item.id}
            //   name={item.name}
            //   image={item.image}
            //   new_price={item.new_price}
            //   old_price={item.old_price}
            //   discount={item.discount}
            // />
            <Shopcategory />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Product;
