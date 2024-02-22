import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 1,
  productId: null,
  loading: false,
  error: false
};
const cartSliceState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const isItemInCart = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart !== -1) {
        state.cartItems[isItemInCart].quantity += 1
      } 
      else {
        state.cartItems.push({...action.payload, quantity: 1})
      }
      // const isItem = state.cartItems.find(item => item.id === action.payload.id)
      // if (isItem) {
      //   state.cartItems.map((cartItem) =>
      //         cartItem.id === action.payload.id
      //           ? state.quantity ++ 
      //           : cartItem
      //       )
      // }
      // else {
      //   state.cartItems.push({...action.payload, quantity: state.quantity})
      // }
      return state
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (itemIndex !== -1) {
        if (state.cartItems.length === 1){
          state.cartItems[itemIndex].quantity -=1
        }
        else {
          state.cartItems.splice(itemIndex, 1)
        }
      }
      // if(state.cartItems[itemIndex].quantity > state.quantity) {
      //   state.cartItems[itemIndex].quantity -=1
      // }
      // else if(state.cartItems[itemIndex].quantity === state.quantity) {
      //   const inCart = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      //   state.cartItems = {...inCart, quantity: state.quantity - 1}
      //   // state.cartItems = inCart
      return state
      
    },
    clearCart: (state) => {
      state.cartItems = []
      console.log('cart has been cleared successfully')
      return state
    },
    handleProductId: (state, action) => {
      state.productId = action.payload
      console.log('productId', state.productId)
      return state
    },
    getCartTotal: (state) => {
      // state.cartItems = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
        state.loading = true
        state.error = false
        console.log(fetchCartItems.pending)
        return state
    })
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.data = action.payload
        return state
    })
    builder.addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
        console.log('The request has been rejected')
        return state
    })
  }
});

const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const response = await fetc("https://localhost:4000/get/cart")
    if(!response.ok) {
        throw new Error('Request Failed')
    }
    const data = response.json()
    console.log(data)
})

export const {addToCart, removeFromCart, handleProductId, clearCart, getCartTotal } = cartSliceState.actions
export default cartSliceState.reducer