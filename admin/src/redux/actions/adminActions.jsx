// Action creators
import { adminCart } from "./types";

export const handleLogin = (UserId) => ({
  type: adminCart.HANDLE_LOGIN,
  payload: UserId,
});

export const handleLogout = () => ({
  type: adminCart.HANDLE_LOGOUT,
});


export const isloading = (loading) => ({
  type: adminCart.LOADING,
  loading,
});

const loginAdmin = async (payload) => {
  try {
    const response = await fetch("http://localhost:4000/users/login/user", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);

    if (data) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      localStorage.setItem("token", data.token);
      console.log("you are now remembered");
    }
    return data;
  } catch (error) {
    console.log("an error has occured", error);
  }
};
export default loginAdmin;
