import React from "react";
import NavBar2 from "../components/Navbar2";
import {ProductDetails} from "../components/ProductDetails";

const DetailsProducts = () => {

  // const addToCart = (productId, quantity) => {
  //   console.log(`adding product with id ${productId} and quantity ${quantity}`)
  // }
  return (
    <div>
      <NavBar2 />
      <ProductDetails />
    </div>
  );
};

export default DetailsProducts;
