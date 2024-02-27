import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HomePage from "../components/HomePage";
import NavBar2 from "../components/Navbar2";

const Home = () => {
  return (
    <div>
      <NavBar2 />
      <HomePage />
    </div>
  );
};

export default Home;
