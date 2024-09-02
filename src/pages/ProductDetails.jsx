import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import DetailsCard from "../components/DetailsCard";

function ProductDetails() {
  const { id } = useParams();
  const { productDetails, setProductDetails, loading } =
    useContext(ShoppingCartContext);



  async function fetchProductDetails() {
    try {
      const apiResponse = await fetch(`http://localhost:8000/products/${id}`);

      const result = await apiResponse.json();

      if (result) {
        setProductDetails(result);

      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);


  

  return (
    <section className="w-[90%] mx-auto my-[4rem]">
      {loading ? (
        <h1 className="font-primary text-base">
          Loading Store....., Please Wait
        </h1>
      ) : null}

      <DetailsCard productDetails={productDetails} />
    </section>
  );
}

export default ProductDetails;
