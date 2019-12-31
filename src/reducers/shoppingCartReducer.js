import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_ONE,
  REMOVE_ONE
} from "../actions/actionTypes";

import {
  getShoppingCartInitState,
  saveShoppingCart,
  removeShoppingCart
} from "../utils/shoppingCartUtils";

const shoppingCartReducer = (state = getShoppingCartInitState(), action) => {
  switch (action.type) {
    ///////////
    case ADD_TO_CART:
      const product = state.find(item => item._id === action.product._id);
      if (!product) {
        state = [...state, action.product];
        saveShoppingCart(state);
        return state;
      }
      return state;
    ///////////
    case REMOVE_FROM_CART:
      state = state.filter(item => item._id !== action.id);
      saveShoppingCart(state);
      return state;
    //////////
    case EMPTY_CART:
      removeShoppingCart();
      state = [];
      return state;
    //////////
    case ADD_ONE:
      state = state.map(product => {
        if (product._id === action.id) {
          return {
            ...product,
            purchased: product.purchased + 1
          };
        } else {
          return product;
        }
      });
      saveShoppingCart(state);
      return state;
    //////
    case REMOVE_ONE:
      state = state.map(product => {
        if (product._id === action.id && product.purchased !== 1) {
          return {
            ...product,
            purchased: product.purchased - 1
          };
        } else {
          return product;
        }
      });
      saveShoppingCart(state);
      return state;
    ///////
    default:
      return state;
  }
};

export default shoppingCartReducer;
