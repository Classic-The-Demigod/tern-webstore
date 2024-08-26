import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/CartContext";
import CartIcon from "../components/CartIcon";

function ProductDetails() {
  const { id } = useParams();
  const { productDetails, setProductDetails, setLoading, loading } =
    useContext(ShoppingCartContext);
  console.log(id);

  async function fetchProductDetails() {
    try {
      const apiResponse = await fetch(`http://localhost:8000/products/${id}`);

      const result = await apiResponse.json();
      console.log(result)

      if (result) {
        setProductDetails(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section className="w-[80%] mx-auto my-[4rem]">
      {loading ? (
        <h1 className="font-primary text-base">
          Loading Store....., Please Wait
        </h1>
      ) : null}

      <main className="flex gap-4">
        <div>
          <img src={productDetails?.image} alt="" />
        </div>

        <div className="space-y-8">
          <h1 className="font-primary text-3xl">{productDetails?.title}</h1>
          <h1 className="font-primary text-3xl">${productDetails?.price}</h1>
          <button className="bg-black text-white py-3 px-8 rounded-lg">Add To Cart</button>
        </div>
      </main>
    </section>
  );
}

export default ProductDetails;
