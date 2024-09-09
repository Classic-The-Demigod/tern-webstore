import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/CartContext";
import DetailsCard from "../components/DetailsCard";
import supabase from "../config/supabase";

function ProductDetails() {
  const { id } = useParams();
  const { productDetails, setProductDetails, loading } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  async function fetchProductDetails() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select()
        .eq("id", id)
      .single()
      if (error) throw error;
      setProductDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="w-[90%] mx-auto my-[4rem]">
      {loading ? (
        <h1 className="font-primary text-base">
          Loading Store....., Please Wait
        </h1>
      ) : null}

      <DetailsCard
        productDetails={productDetails}
        // handleAddToCart={handleAddToCart}

      />
    </section>
  );
}

export default ProductDetails;
