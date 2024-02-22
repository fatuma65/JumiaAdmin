import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [UserId, setUserId] = useState(null);
  // const [cartItems, setCartItems] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [productId, setProductId] = useState(null);

  // const handleProductId = (productId) => {
  //   setProductId(productId);
  // };
  // // const handleLogin = (UserId) => {
  //   setIsLoggedIn(true);
  //   setUserId(UserId);
  // };
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUserId(null);
  // };
  // const /addToCart = (item) => {
    // try {
      // const isItemInCart = cartItems.find(
      //   (cartItem) => cartItem.id === item.id
      // );
      // if (isItemInCart) {
      //   setCartItems(
      //     cartItems.map((cartItem) =>
      //       cartItem.id === item.id
      //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
      //         : cartItem
      //     )
      //   );
      // } else {
      //   const newItem = { ...item, quantity: 1 };
      //   console.log(typeof quantity);
      //   setCartItems([...cartItems, newItem]);
      // }
  //   } catch (error) {
  //     console.log("Error fetching product detials", error);
  //   }
  // };

  // get the total price of the products
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  // clearing the cart
  // const clearCart = () => {
  //   setCartItems([]);
  // };

  // removing the quantity
  // const removeFromCart = (item) => {
  //   try {
  //     const isItemInCart = cartItems.find(
  //       (cartItem) => cartItem.id === item.id
  //     );
  //     if (isItemInCart.quantity === 1) {
  //       setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  //     } else {
  //       setCartItems(
  //         cartItems.map((cartItem) =>
  //           cartItem.id === item.id
  //             ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //             : cartItem
  //         )
  //       );
  //     }
  //   } catch (error) {
  //     console.log("Error fetching product detials", error);
  //   }
  // };
  // to persist the cart state
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems))
  // }, [cartItems])
  return (
    <div>
      <AuthContext.Provider
        value={{
          // UserId,
          // handleLogin,
          // handleLogout,
          // isLoggedIn,
          // addToCart,
          // cartItems,
          // setCartItems,
          // handleProductId,
          // productId,
          // quantity,
          getCartTotal,
          // clearCart,
          // removeFromCart,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
// export default { AuthContext};
