import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Categories from "./routes/categories";
import Login from "./routes/login";
import Product from "./routes/product";
import DetailsProducts from "./routes/productDetails";
import ProductListPage from "./routes/productListPage";
import Register from "./routes/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Categories />}></Route>
        <Route
          path="/product/details/:id"
          element={<DetailsProducts />}
        ></Route>

        <Route path="/product" element={<Product />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/cart/:UserId" element={<Cart />}></Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
