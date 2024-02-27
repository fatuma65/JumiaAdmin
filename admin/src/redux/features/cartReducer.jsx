
import { cartTypes } from "../actions/types";

const initialState = {
  cartItems: [],
  productId: null,
  quantity: 1,
  loading: false,
  error: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.find((item) => item.id === action.payload)
          ? [
              ...state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload
              ),
              { ...action.payload, quantity: 1 },
            ]
          : state.cartItems.push({ ...action.payload, quantity: 1 }),
      };
    case cartTypes.REMOVE_CART:
      return {
        ...state,
        itemIndex:
          state.cartItems.findIndex((item) => item.id === action.payload.id) ||
          (itemIndex !== -1 && state.cartItems === 1)
            ? (state.cartItems[itemIndex].quantity -= 1)
            : state.cartItems.splice(itemIndex, 1),
      };
    case cartTypes.CLEAR_CART:
      return {
        cartItems: [],
      };

    case cartTypes.HANDLE_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };

    default:
      return state;
  }
};
