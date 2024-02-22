import React from "react";
import banners from '../assets/image1.png'
import './HeaderStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const HomePage = () => {
  return (
    <div className="home " >
      <h1>Welcome to the dashboard</h1>
      <img src={banners} className="img-fluid"/>
    </div>
  );
};

export default HomePage;
