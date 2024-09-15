import { createContext, useEffect, useState } from "react";
import supabase from "../config/supabase";
import { useAuth } from "./AuthProvider";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([])
  
 

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("products").select();
      if (error) throw error;

      setItems(data);
      setLoading(false);
      console.log("Items fetched:", data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  const addToCart = async (userId, productId, quantity) => {
    const { data, error } = await supabase
      .from("cart")
      .upsert({ user_id: userId, product_id: productId, quantity })
      .select();
    setCartItems[data]
    console.log(cartItems);
    if (error) throw error;
    return data;
  };

 

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        productDetails,
        setProductDetails,
        loading,
        setLoading,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

// function ShoppingCartProvider({ children }) {
//   const [loading, setLoading] = useState(false);
//   const [productList, setProductList] = useState([]);
//   const [productDetails, setProductDetails] = useState([]);
//   const [cartItems, setCartItems] = useState([]);

//   async function fetchProducts() {
//     try {
//       setLoading(true);
//       const apiUrl = "http://localhost:8000/products";
//       const apiResponse = await fetch(apiUrl);
//       const result = await apiResponse.json();

//       if (result && result.length > 0) {
//         console.log(result);
//         setProductList(result);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }

//   function handleAddToCart(productToAdd) {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (item) => item.id === productToAdd.id
//       );

//       if (existingItem) {
//         // If the item exists, update its quantity and total price
//         return prevItems.map((item) =>
//           item.id === productToAdd.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//                 totalPrice: (item.quantity + 1) * item.price,
//               }
//             : item
//         );
//       } else {
//         // If the item doesn't exist, add it to the cart
//         return [
//           ...prevItems,
//           {
//             ...productToAdd,
//             quantity: 1,
//             totalPrice: productToAdd.price,
//           },
//         ];
//       }
//     });
//   }

//   function handleRemoveFromCart(productToRemove, isFullyRemovedFromCart) {
//     setCartItems((prevItems) => {
//       if (isFullyRemovedFromCart) {
//         // Remove the item completely from the cart
//         return prevItems.filter((item) => item.id !== productToRemove.id);
//       } else {
//         // Decrease the quantity by 1
//         return prevItems
//           .map((item) =>
//             item.id === productToRemove.id
//               ? item.quantity > 1
//                 ? {
//                     ...item,
//                     quantity: item.quantity - 1,
//                     totalPrice: (item.quantity - 1) * item.price,
//                   }
//                 : null // This will be filtered out below
//               : item
//           )
//           .filter(Boolean); // Remove any null items (i.e., those with quantity 0)
//       }
//     });
//   }

//   useEffect(() => {

//     fetchProducts();

//     const storedCartItems = JSON.parse(
//       localStorage.getItem("cartItems") || "[]"
//     );
//     setCartItems(storedCartItems);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         loading,
//         productList,
//         productDetails,
//         setProductDetails,
//         handleAddToCart,
//         handleRemoveFromCart,
//         cartItems,
//       }}
//     >
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// }

export default ShoppingCartProvider;
