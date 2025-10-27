import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  //we won't create number of items nor item price here
  //because we can derive them from cart and we will need to keep them
  //in sync with cart array .
  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: "Mediterranean",
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload : newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cart;
//it is recommended that the selectors start with get
//this may cause performance issues in larger apps.
//use reselect library to optimize them .
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// Now your selector is a function that returns another function:
// First call: getCurrentQuantityById(id) → returns a function waiting for state
// Then useSelector automatically calls that returned function with state
// | Selector Type           | Example                  | Works with `useSelector`? |
// | ----------------------- | ------------------------ | ------------------------- |
// | Regular (no args)       | `(state) => state.cart`  | ✅                         |
// | Curried (with args)     | `(id) => (state) => ...` | ✅                         |
// | Two-arg direct function | `(id, state) => ...`     | ❌                         |

export const getCurrentQuantityById = (id) => (state) =>
  //optional chaining prevents crash .
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
