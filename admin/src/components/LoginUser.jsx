import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
import { useDispatch, useSelector } from "react-redux";
import loginAdmin, {
  // getloginData,
  handleLogin,
  isloading,
} from "../redux/actions/adminActions";
import "./LoginUserStyles.css";
const LoginAdmin = () => {
  const [loginData, setLogin] = useState({
    username: "",
    password: "",
  });
  // let loginInfo = useSelector((state) => state.adminReducer);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { handleLogin } = useAuth();

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
    // dispatch(getloginData(result))
    // console.log(dispatch(getloginData(result)))

    const UserId = result.UserId;
    console.log('this is the user id',UserId);
    // const admin = {
    //   UserId: UserId,
    //   // isLoggedIn: true
    // }
    // console.log(admin)
    dispatch(handleLogin(UserId));

    navigate(`/`);
  };

  // if (!isloading) {
  //   return (
  //     <button className="btn btn-primary">
  //       <span className="spinner-border spinner-border-sm"></span>
  //       Loading..
  //     </button>
  //   );
  // }

  // const handleRemember = () => {
  //    const remembered = !loginData.remember
  //   setLogin({...loginData, remember:remembered });
  //   if (remembered) {
  //     // save the users credentials to local storage
  //     localStorage.setItem('username', loginData.username)
  //     localStorage.setItem('password', loginData.password)
  //     console.log('you are now remembered')
  //   }
  //   else {
  //     // we remove the users credentials from local storage
  //     console.log('you are no longer remembered')
  //     localStorage.removeItem('username')
  //     localStorage.removeItem('password')
  //     console.log('you are no longer remembered')
  //   }
  // }

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
          <input
            className="form-check-input"
            type="checkbox"
            name="remember"
            // onClick={handleRemember}
          />
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
