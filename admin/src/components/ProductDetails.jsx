import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, handleProductId } from "../redux/actions/cartActions";
import "./ProductDetailsStyles.css";
export const ProductDetails = () => {
  const navigate = useNavigate();
  const adminId = useSelector((state) => state.admin.adminId);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    try {
      const fetchProductDetails = async () => {
        const response = await fetch(
          `http://localhost:4000/products/get/${id}`
        );
        const data = await response.json();
        setProducts(data);
        console.log(data);
      };
      fetchProductDetails();
    } catch (error) {
      console.log("an error has occured fetching product details", error);
    }
  }, [id]);

  if (!products || isNaN(id)) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    try {
      let productId = products.id;
      console.log(dispatch(addToCart(products)))
      dispatch(handleProductId(productId));
      console.log("product added to cart");
      console.log(`adding product ${productId} to cart for user ${adminId}`);

      navigate(`/cart/${adminId}`);
    } catch (error) {
      console.log("an error has occured adding product to cart", error);
    }
  };

  return (
    <Card
      style={{ width: "26rem", marginLeft: "10px" }}
      className="border border-0"
    >
      <Card.Body>
        <Card.Title>Product Detail</Card.Title>
        <Card.Title className="products-title">{products.title}</Card.Title>
        <Card.Text style={{ fontSize: "18px" }}>
          {products.description}
        </Card.Text>
        <Card.Subtitle style={{ color: "red" }}>
          UGX {products.price}
        </Card.Subtitle>
        <Card.Img
          src={`http://localhost:4000/uploads/${products.image}`}
          variant="top"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        ></Card.Img>
        <Button style={{ margin: "10px", padding: "10px", fontSize: "18px" }}>
          Buy Now
        </Button>
        <Button
          onClick={handleAddToCart}
          style={{ margin: "10px", padding: "10px", fontSize: "18px" }}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
