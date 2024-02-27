import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginAdmin, {
  handleLogin,
  isloading,
} from "../redux/actions/adminActions";
import "./LoginUserStyles.css";
const LoginAdmin = () => {
  const [loginData, setLogin] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    dispatch(isloading(true));
    const result = await loginAdmin(loginData);
    console.log(result);
    dispatch(isloading(false));

    if (!result) {
      console.log("results not found");
    }

    const UserId = result.UserId;
    console.log("this is the user id", UserId);

    dispatch(handleLogin(UserId));

    navigate(`/`);
  };

  return (
    <div>
      <form onSubmit={submitLogin} className="form">
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
          <input className="form-check-input" type="checkbox" name="remember" />
          Remember me
        </label>
        <input
          type="submit"
          className="btn btn-success button"
          style={{ textAlign: "center !important" }}
        />
      </form>
    </div>
  );
};

export default LoginAdmin;
