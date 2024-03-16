import { cartTypes } from "../actions/types";
// import { additemtocart } from "./utilis";
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
      console.log(action.payload);
    
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, action.payload],
      //   // totalPrice: state.totalPrice + payload.price,
      // };
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],

      };
    case cartTypes.INCREASE_QUANTITY:
      console.log(action.payload)
      const product = state.cartItems.find(
        item => item.id === action.payload.id,
      );
    
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            }
            : [...state.cartItems, action.payload]
            // : item
          ),
          // totalPrice: state.totalPrice + payload.price,
        };
      }
      // return {
      //   ...state,

      //   // cartitems: additemtocart(state.cartItems, action.payload)
      // };

      // console.log(product)
      // state.quantity += 1

  
      // return {
      //   ...state,
      //   // [itemId]: (state[itemId] || 0) + 1
      //   // quantity: state.cartItems[itemId].quantity + 1

      // //   cartItems: state.cartItems.find(item =>
      // //     item.id === action.id
      // //       ? {...item, quantity: item.quantity + 1}
      // //       : item,
      // //   ),
      // // };


      //   cartItems: state.cartItems.map((item) => item.id === action.payload.id ?
      //   // state.cartItems.quantity ++ 
      //   state.quantity = item.quantity + 1
      //   // {...item, quantity: item.quantity + 1}

      //   : 
      //     null
      //   )
      // }

    case cartTypes.REMOVE_CART:

        // itemIndex:
        //   state.cartItems.findIndex((item) => item.id === action.payload.id) ||
        //   (itemIndex !== -1 && state.cartItems === 1)
        //     ? (state.cartItems[itemIndex].quantity -= 1)
        //     : state.cartItems.splice(itemIndex, 1),
      //   cartItems: state.cartItems.filter(
      //     (item) => item.id === action.payload.id
      //   ),
      // };
      const product1 = state.cartItems.find((product) => product.id === product.id);
      if (product1.quantity === 1) {
        const index = state.cartItems.findIndex(
          (product) => product.id === payload
        );
        state.cartItems.splice(index, 1);
      } else {
        product1.quantity--;
      }
    
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
