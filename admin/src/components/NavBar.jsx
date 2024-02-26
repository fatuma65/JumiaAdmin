import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "./AuthContext";
import { connect, useDispatch, useSelector } from "react-redux";
import { handleLogin, handleLogout } from '../redux/actions/adminActions';

import "./NavBarStyles.css";

const NavBar = () => {
  // const {isLoggedIn} = handleLogin
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn)

  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("you are now logged out");
    dispatch(handleLogout());
  };
  return (
    <div className="container navbar navbar-expand-lg navbar-light bg-bar">
      <nav className="navbar navbar-nav mr-auto">
        <ul>
          <li className="nav-item active">
            <a href="/" className="nav">
              Home
            </a>
          </li>
          {isLoggedIn ? (
            // <ul className="nav-items">
            <>
              <li className="nav-item">
                <Link to="/product" className="nav">
                  Add products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product/details" className="nav">
                  Product Details
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav">
                  Categories
                </Link>
              </li>
              <button onClick={handleClick} className="btn btn-dark">
                <Link to="/">Logout</Link>
              </button>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" onClick={handleLogin}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default connect()(NavBar);

