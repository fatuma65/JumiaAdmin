import { cartTypes } from "./types";

export const addToCart = (cartItems) => ({
  type: cartTypes.ADD_TO_CART,
  payload: cartItems,
  // payload: quantity,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
  
});

export const removeCart = () => ({
  type: cartTypes.REMOVE_CART,
});

export const handleProductId = (productId) => ({
  type: cartTypes.HANDLE_PRODUCT_ID,
  payload: productId,
});
