import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
// import {ProductList} from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      {/* <ProductList /> */}
      
    </div>
  );
};

export default Home;
