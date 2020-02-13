import { SET_PRODUCTS } from './actionTypes'
import { loadProducts } from '../utils/asyncFunctions';


export const setProducts = (products = []) => ({
    type: SET_PRODUCTS,
    products
})

export const startSetProducts =() =>{
    return (dispatch) => {
    
        return loadProducts()
        .then(data => {
          dispatch(setProducts(data))
        })
       
    }
};
