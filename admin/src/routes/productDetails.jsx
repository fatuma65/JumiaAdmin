import React from "react";
import NavBar from "../components/NavBar";
import {ProductDetails} from "../components/ProductDetails";

const DetailsProducts = () => {

  // const addToCart = (productId, quantity) => {
  //   console.log(`adding product with id ${productId} and quantity ${quantity}`)
  // }
  return (
    <div>
      <NavBar />
      <ProductDetails />
    </div>
  );
};

export default DetailsProducts;
