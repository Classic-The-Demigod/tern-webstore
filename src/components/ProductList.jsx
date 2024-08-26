import { useContext } from "react"
import { ShoppingCartContext } from "../context/CartContext"
import ProductCard from "./ProductCard"


function ProductList() {
    const { loading, productList } = useContext(ShoppingCartContext)
    
    if (loading) return <h1 className="font-primary text-base">Loading Store....., Please Wait</h1>
  return (
    <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">


              
      {productList && productList.length > 0 ? (
        productList.map((singleProductItem) => (
          <ProductCard
            singleProductItem={singleProductItem}
            key={singleProductItem.id}
          />
        ))
      ) : (
        <h3 className="font-primary text-base">No Products Found :(</h3>
      )}
        </div>
    </section>
  );
}

export default ProductList