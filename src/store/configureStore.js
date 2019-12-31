import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'


import productReducer from '../reducers/productReducer'
import shoppingCartReducer from '../reducers/shoppingCartReducer'
import authReducer from '../reducers/authReducer'
import filtersReducer from '../reducers/filtersReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default () => {


  const store = createStore(
    combineReducers({
      products: productReducer,
      shoppingCart: shoppingCartReducer,
      auth: authReducer,
      filters: filtersReducer
    }),

    composeEnhancers(applyMiddleware(thunk))
  )
  //console.log(store)
  return store
}