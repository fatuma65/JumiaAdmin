import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar2 from "../components/Navbar2"
import HomePage from "../components/HomePage";


const Home = () => {

  return (
    <div>
      {/* <NavBar /> */}
      <NavBar2 />
      <HomePage />
      {/* <ProductList /> */}
    </div>
  );
};

export default Home;
