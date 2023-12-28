// import React from "react";
import React, { useContext } from "react";
import "./Wishlist.css";
// import All_product from "../Assets/All_product";
// import { ShopContext } from "../../Context/ShopContext";
// import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
import { RxCross2 } from "react-icons/rx";
import { LuIndianRupee } from "react-icons/lu";
function Wishlist() {
  const { All_product, cartItems, removeFromCart } = useContext(ShopContext);
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Product 1", isWishlisted: false },
  //   { id: 2, name: "Product 2", isWishlisted: false },
  //   // ... add more products as needed
  // ]);
  // const toggleWishlist = (productId) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === productId
  //         ? { ...product, isWishlisted: !product.isWishlisted }
  //         : product
  //     )
  //   );
  // };
  // const wishlistItems = ["Item 1", "Item 2"];
  // const { All_Product } = useContext(ShopContext);

  // const [wishlist, setWishlist] = useState([]);
  // const { cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="wishlist_container">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>

        <p>Remove</p>
      </div>
      <hr />
      {All_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>
                  {" "}
                  <LuIndianRupee />
                  {e.new_price}
                </p>

                <RxCross2
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      {/* <h3>My Wishlist</h3>
      <div className="wishlist_head">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div> */}
      {/* {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )} */}
      {/* <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <span>{product.name}</span>
            <button onClick={() => toggleWishlist(product.id)}>
              {product.isWishlisted
                ? "Remove from Wishlist "
                : "Add to Wishlist "}
            </button>
          </div>
        ))}
      </div> */}
      {/* <div className="wishlist">
        <h2>Wishlist</h2>
        <ul>
          {products
            .filter((product) => product.isWishlisted)
            .map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Wishlist;
