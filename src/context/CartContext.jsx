import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiUrl = "http://localhost:8000/products";
      const apiResponse = await fetch(apiUrl);
      const result = await apiResponse.json();
 

      if (result && result.length > 0) {
        setProductList(result)
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

       console.log(productList);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ loading, productList }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;