import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";
import "./ProductListStyles.css";
export const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/products/get/products")
      .then((response) => response.json())

      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
    setLoading(false);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return (
      <button className="btn btn-primary">
        <span className="spinner-border spinner-border-sm"></span>
        Loading..
      </button>
    );
  }

  const handleClick = (id) => {
    setSelectedProduct(id.selectedProduct);
    console.log(id);
    navigate(`/product/details/${id}`);
  };

  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };
  return (
    <div className="container-fluid ">
      <h1 className="h4">Products</h1>
      <ul className="row">
        {product.map((items) => {
          return (
            <div
              key={items.id}
              className="col-md-4 col-md-3 "
              onClick={() => handleClick(items.id)}
            >
              <p className="product-title">{items.title}</p>
              <p className="product-description">{items.description}</p>
              <p className="product-price">${items.price}</p>
              <img
                src={`http://localhost:4000/uploads/${items.image}`}
                alt={items.title}
                className=" img-fluid mx-auto d-block"
              />
              {items.category && (
                <p className="product-category">
                  Category:{items.category.title}
                </p>
              )}
              <div>
                <button className="btn btn-primary">Buy Now</button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              {selectedProduct && <ProductDetails id={selectedProduct} />}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
