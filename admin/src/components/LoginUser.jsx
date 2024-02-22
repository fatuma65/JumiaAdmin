import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
import {connect, useSelector, useDispatch} from 'react-redux'
import { handleLogin } from "../features/adminSlice";

const LoginAdmin = () => {
  const [loginData, setLogin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const UserId = useSelector(state => state.user.UserId)
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()
  // const { handleLogin } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
  };
  const navigate = useNavigate();
  const submitLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch("http://localhost:4000/users/login/user", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    setLogin(data);
    const UserId = data.UserId;
    console.log(UserId);
    dispatch(handleLogin(UserId))
    navigate(`/`);
    setLoading(false);
  };

  if (loading) {
    return (
      <button className="btn btn-primary">
        <span className="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    );
  }

  const handleRemember = () => {
     const remembered = !loginData.remember
    setLogin({...loginData, remember:remembered });
    if (remembered) {
      // save the users credentials to local storage
      localStorage.setItem('username', loginData.username)
      localStorage.setItem('password', loginData.password)
      console.log('you are now remembered')
    }
    else {
      // we remove the users credentials from local storage
      console.log('you are no longer remembered')
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      console.log('you are no longer remembered')
    }
  }

  return (
    <div>
      <form onSubmit={submitLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          defaultValue={loginData.username}
          name="username"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={handleChange}
          defaultValue={loginData.password}
          name="password"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember" onClick={handleRemember} />
          Remember me
        </label>
        <input type="submit" className="btn btn-success" disabled={loading}/>
      </form>
    </div>
  );
};

export default connect()(LoginAdmin);
