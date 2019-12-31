export const filterProduct = (products, { text }) => {
  return products.filter( product => {
    const textMatch = product.name.toLowerCase().includes(text.toLowerCase())

    return textMatch
  }) 
}