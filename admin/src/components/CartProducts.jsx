import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartStyles.css";
const CartProducts = () => {
  const UserId = useSelector((state) => state.admin.UserId);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const quantity = useSelector((state) => state.cart.quantity);
  const productId = useSelector((state) => state.cart.productId);
  const dispatch = useDispatch();
  const addProductToCart = async () => {
    try {
      const response = await fetch("http://localhost:4000/cart/create/cart", {
        method: "POST",
        body: JSON.stringify({
          UserId,
          cartItems,
          productId,
          quantity,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);

      console.log("product added successfully", data);
    } catch (error) {
      console.log("an error has occured adding the cart", error);
    }
  };

  useEffect(() => {
    addProductToCart();
  }, [cartItems]);

  const handleAddCart = (items) => {
    dispatch(addToCart(items));
  };
  const handleRemoveCart = (items) => {
    dispatch(removeFromCart(items));
    console.log("product is removed from cart");
  };

  if (!cartItems) {
    return <div>Cart not found</div>;
  }

  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card" style={{ border: "none" }}>
          <div className="card-body" style={{ border: "none" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>

                    <td>
                      <img
                        src={`http://localhost:4000/uploads/${item.image}`}
                        alt={item.title}
                        className="fluid rounded"
                        width={60}
                        height={60}
                      />
                    </td>
                    <i
                      onClick={() => handleAddCart(item)}
                      className="bi bi-caret-down"
                    ></i>
                    <i className="mx-2">{item.quantity}</i>
                    <i
                      onClick={() => handleRemoveCart(item)}
                      className="bi bi-caret-down"
                    >
                      -
                    </i>
                    <td>${item.price}</td>

                    <td>${item.price * item.quantity}</td>
                    <i
                      onClick={() => handleRemoveCart(item)}
                      className="bi bi-caret-x text-danger"
                    >
                      remove
                    </i>
                  </tr>
                ))}
                <tr>
                  <th colSpan={3} className="text center">
                    Total Price
                  </th>
                  <td colSpan={3} className="text center">
                    <span className="badge bg-danger rounded-pill">
                      ${" "}
                      {cartItems.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
