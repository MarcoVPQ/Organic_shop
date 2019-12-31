import { SET_PRODUCTS } from './actionTypes'


export const setProducts = (products = []) => ({
    type: SET_PRODUCTS,
    products
})

export const startSetProducts =() =>{
    return (dispatch, getState) => {
    
        return fetch('https://bodega-backend-api.herokuapp.com/products')
        .then(data => {
          return data.json().then(json => {
          dispatch(setProducts(json))
          })
        })
       
    }
};
