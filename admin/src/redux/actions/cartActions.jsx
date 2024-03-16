import { cartTypes } from "./types";

export const addToCart = (payload) => ({
  type: cartTypes.ADD_TO_CART,
 payload
  // payload: quantity,
});

// export const addToCart = (cartitems) => ({
//   type: cartTypes.ADD_TO_CART,
//   payload: cartitems
//   // payload: quantity,
// });

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});

export const increaseQuantity = (payload) => ({
  type: cartTypes.INCREASE_QUANTITY,
  payload
});

export const removeCart = (itemid) => ({
  type: cartTypes.REMOVE_CART,
  payload: itemid,
});
// export const removeCart = (cartItems) => ({
//   type: cartTypes.REMOVE_CART,
//  cartItems
// });

export const handleProductId = (productId) => ({
  type: cartTypes.HANDLE_PRODUCT_ID,
  payload: productId,
});
