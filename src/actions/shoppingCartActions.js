import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  EMPTY_CART,
  ADD_ONE,
  REMOVE_ONE
} from './actionTypes'


export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product
})


export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id
})


export const addOne = (id) => ({
  type: ADD_ONE,
  id
})

export const removeOne = (id) => ({
  type: REMOVE_ONE,
  id
})

export const emptyCart = () => ({
  type: EMPTY_CART
})
