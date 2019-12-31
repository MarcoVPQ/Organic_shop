export const getShoppingCartInitState = () => {

  const shoppingCartJson = localStorage.getItem('shoppingCart')

  try{
    return shoppingCartJson ? JSON.parse(shoppingCartJson) : []
  } catch (e){
    return []
  }
}



export const saveShoppingCart = (shoppingCart) => {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

export const removeShoppingCart = () => {
  localStorage.removeItem('shoppingCart')
}