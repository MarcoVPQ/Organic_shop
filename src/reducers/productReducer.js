import { SET_PRODUCTS } from '../actions/actionTypes'
const productsDefaultState = []


const productReducer = ( state = productsDefaultState, action) => {
  switch(action.type){
    case SET_PRODUCTS:
  
    return [
      ...action.products
    ]
    default:
    return state
  }
}


export default productReducer