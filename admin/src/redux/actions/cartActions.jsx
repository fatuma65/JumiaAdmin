import { cartTypes } from "./types";

export const addToCart = (cartItems, quantity) => ({
  type: cartTypes.ADD_TO_CART,
  cartItems,
  quantity,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});

export const removeCart = () => ({
  type: cartTypes.REMOVE_CART,
});

export const handleProductId = (productId) => ({
  type: cartTypes.HANDLE_PRODUCT_ID,
  productId,
});
