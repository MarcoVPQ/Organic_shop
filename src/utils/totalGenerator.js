export const totalGenerator = (prodcuts) => {
  return prodcuts.map( product => product.price * product.purchased )
                 .reduce((sum, val) => sum + val , 0)
}