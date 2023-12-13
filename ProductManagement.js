//65130500010
function ProductManagement() {
let products = []
  function getAllProducts() {
    return products
  }
  function addProduct(product){
    products.push(product)
  }
  function removeAll(){
    return products = []
  }
  function searchByName(name) {
   return products.reduce((productMatch,product)=>{
    if (product.name.toLowerCase()===name.toLowerCase()) {
      productMatch.push(product)
    }
    return productMatch
   },[])
 // return [products.find(a=>a.name.toLowerCase()===name.toLowerCase())]
  }
  function searchByPriceRange(minPrice, maxPrice) {
    return products.reduce((productMatch,product)=>{
      if (product.price>=minPrice && product.price<=maxPrice) {
        productMatch.push(product)
      }
      return productMatch
     },[])
    //return [products.find(a=>a.price>=minPrice && a.price<maxPrice)]

    }
  
  return {getAllProducts,addProduct,removeAll,searchByName,searchByPriceRange}
}  

module.exports = ProductManagement
const productCatalog = ProductManagement()
