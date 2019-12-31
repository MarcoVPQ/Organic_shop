export const getProduct = async (id) => {
  const response = await fetch('https://bodega-backend-api.herokuapp.com/product/' + id )
  const data = await response.json()

  return data
}