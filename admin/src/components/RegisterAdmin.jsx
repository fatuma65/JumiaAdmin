import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isloading} from "../redux/actions/adminActions";
import { useNavigate } from "react-router-dom";

import './LoginUserStyles.css'
const RegisterAdmin = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    role: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        dispatch(isloading(true));
        const res = await fetch("http://localhost:4000/admin/create/admin", {
          method: "POST",
          body: JSON.stringify(registerData),
          headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        console.log(data)
        setRegisterData(data)
        dispatch(isloading(false));
        setRegisterData('')
        navigate('/login')

      }
      catch (error) {
        console.log("an error has occured", error);
      }
   
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form1">
        <label htmlFor="username">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          defaultValue={registerData.firstName}
          name="firstName"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          defaultValue={registerData.lastName}
          name="lastName"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="lastName">username</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          defaultValue={registerData.username}
          name="username"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          defaultValue={registerData.email}
          name="email"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          onChange={handleChange}
          defaultValue={registerData.phoneNumber}
          name="phoneNumber"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          onChange={handleChange}
          defaultValue={registerData.role}
          name="role"
          required
          className="mb-3"
          autoComplete="on"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={handleChange}
          defaultValue={registerData.password}
          name="password"
          required
          className="mb-3"
          autoComplete="on"
        />
        <button className="btn btn-dark button">Submit</button>
      </form>
    </div>
  );
};

export default RegisterAdmin;
