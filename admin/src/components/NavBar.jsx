import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "./AuthContext";
import "./NavBarStyles.css";
import {  useSelector, useDispatch } from "react-redux";
import { handleLogin, handleLogout } from "../features/adminSlice";

const NavBar = () => {
  // const { isLoggedIn, handleLogin, handleLogout } = useAuth();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const handleClick = () => {
    console.log('you are now logged out')
    dispatch(handleLogout())
  }

  return (
    <div className="container navbar navbar-expand-lg navbar-light bg-bar">
      <ul className="navbar navbar-nav mr-auto">
        <li className="nav-item active navbar-brand">
          <a href="/" className="nav-link">Home</a>
        </li>
        {isLoggedIn ? (
          // <ul className="nav-items">
          <>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Add products</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/product/details" className="nav-link">Product Details</Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link">Categories</Link>
            </li>
            <button onClick={handleClick} className="btn btn-dark">
              <Link to="/" >Logout</Link>
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
    </div>
  );
};

export default NavBar;
