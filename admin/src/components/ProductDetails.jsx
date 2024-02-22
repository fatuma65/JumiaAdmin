import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
// import {useAuth} from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { addToCart, handleProductId } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export const ProductDetails = () => {
  const navigate = useNavigate()
  // const { handleProductId} = useAuth()
  const UserId = useSelector(state => state.user.UserId)
  const dispatch = useDispatch()

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
        console.log(products);
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
    try{
     let productId = products.id
      dispatch(addToCart(products))
      dispatch(handleProductId(productId))
      console.log('product added to cart')
          console.log(`adding product ${productId} to cart for user ${UserId}`)

      navigate(`/cart/${UserId}`)
    }
    catch(error) {
      console.log('an error has occured adding product to cart', error)
    }
  }

  return (
    <Card style={{width: '26rem', marginLeft: '10px'}} className="border border-0">
      <Card.Body>
        <Card.Title>Product Detail</Card.Title>
        <Card.Title className="products-title">{products.title}</Card.Title>
        <Card.Text style={{fontSize: '18px'}}>{products.description}</Card.Text>
        <Card.Subtitle style={{color: 'red'}}>${products.price}</Card.Subtitle>
        <Card.Img src={`http://localhost:4000/uploads/${products.image}`} variant="top" style={{marginRight: 'auto', marginLeft: 'auto'}}></Card.Img>
        <Button style={{margin: '10px', padding: '10px', fontSize:'18px'}}>Buy Now</Button>
        <Button onClick={handleAddToCart} style={{margin: '10px', padding: '10px', fontSize:'18px'}}>Add To Cart</Button>
      </Card.Body>
    </Card>
    // <div className="card-body">
    //   {products && (
    //     <div className="card" style={{width:"500px"}}>
    //       <h1 className="card-title">Product Detail</h1>
    //       <div className="card-body">
    //       <p className="card-title"> {products.title}</p>
    //       <p className="card-text">
    //         {products.description}
    //       </p>
    //       <p className="card-text">$ {products.price}</p>
    //       <img
    //         src={`http://localhost:4000/uploads/${products.image}`}
    //         alt={products.title}
    //         className="card-image-top"
    //       />
    //       </div>
    //       <div className="buttons">
    //         <button className="btn btn-success">Buy Now</button>
    //         <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
    //     </div>
    //     {/* {<ProductList />} */}
    //     </div>
    //   )}
 
    // </div>
    // <div >
    //   {products && (
    //     <div className="product">
    //       <h1>Product Detail</h1>
    //       <div className="product-details">
    //       <p className="title"> {products.title}</p>
    //       <p className="description">
    //         {products.description}
    //       </p>
    //       <p className="price">$ {products.price}</p>
    //       <img
    //         src={`http://localhost:4000/uploads/${products.image}`}
    //         alt={products.title}
    //         className="image"
    //       />
    //       </div>
    //       <div className="buttons">
    //         <button className="buy">Buy Now</button>
    //         <button className="see" onClick={handleAddToCart}>Add to Cart</button>
    //     </div>
    //     {/* {<ProductList />} */}
    //     </div>
    //   )}
 
    // </div>
  );
};

// export default ProductDetails;
