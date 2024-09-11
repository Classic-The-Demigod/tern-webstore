import { useContext, useState } from "react";
import ArrowDown from "./ArrowDown";
import Truck from "./Truck";
import ProductCard from "./ProductCard";
import { useAuth } from "../context/AuthProvider";
import { ShoppingCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function DetailsCard({ productDetails }) {
  const [accordion, setAccordion] = useState(false);
  const { user, auth } = useAuth()
  const {addToCart} = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  

  // const { productList } = useContext(ShoppingCartContext);
  // const [category, setCategory] = useState(productDetails?.category);

  // console.log(productDetails)

  // const filteredProducts = productList.filter(
  //   (product) => product?.category === productDetails?.category
  // );
  // console.log(filteredProducts);

  const handleAddToCart = async () => {
    if (!auth) {
      navigate("/register");
      return;
    }
    try {
      await addToCart(user.id, productDetails?.id, 1); // Assuming you're adding one item at a time
      // Show a success message or update the UI as needed
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  function handleAccordion() {
    setAccordion(!accordion);
  }
  return (
    <>
      <main className="flex gap-8 md:flex-row flex-col">
        <div>
          <img
            className="w-[500px] flex-1"
            src={productDetails?.image}
            alt=""
          />
        </div>

        <div
          className="space-y-6 md:space-y-8 flex-1 flex flex-col 
     "
        >
          <h1 className="font-primary text-2xl md:text-3xl">
            {productDetails?.title}
          </h1>
          <h1 className="font-primary text-3xl">${productDetails?.price}</h1>

          <div>
            <p>Sizes: </p>
            <div className="flex gap-4 mt-2">
              {productDetails?.sizes
                ? productDetails?.sizes.map((size) => (
                    <button
                      className="border  hover:border-black transition:border duration-300 ease-in border-gray-200 w-[50px] h-[50px] rounded-md"
                      key={Math.random()}
                    >
                      {size}
                    </button>
                  ))
                : null}
            </div>
          </div>

          <div className="flex  gap-2  items-center">
            {productDetails?.thumbnails
              ? productDetails.thumbnails.map((thumbnail) => (
                  <button
                    key={Math.random()}
                    className="border  hover:border-black transition:border duration-300 ease-in border-gray-200 rounded"
                  >
                    <img
                      className="w-[60px] rounded-md"
                      src={thumbnail}
                      alt={Math.random()}
                    />
                  </button>
                ))
              : null}
          </div>

          <button
            className="border-black  text-black border py-3 px-8 rounded-lg hover:bg-black hover:text-white transition:all duration-300 ease-in"
            onClick={() => handleAddToCart()}
          >
            Add To Cart
          </button>
          <button className=" text-white border py-3 px-8 rounded-lg  bg-gray-800 hover:bg-black transition:all duration-300 ease-in">
            Buy it now
          </button>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex gap-2 w-full bg-gray-200 py-3 px-3 rounded-md">
              <img
                src="https://cdn.shopify.com/s/files/1/0619/9479/5171/files/check-circle.svg?v=1715632162"
                alt="Check icon"
              />
              Ready to ship
            </div>
            <div className="flex gap-2 w-full bg-gray-200 py-3 px-3 rounded-md">
              <img
                src="https://cdn.shopify.com/s/files/1/0619/9479/5171/files/globe.svg?v=1715632262"
                alt="globe svg"
              />
              Worlwide shipping
            </div>
          </div>

          <div className="flex gap-2">
            <Truck />
            <p className="font-primary">
              <span className="font-bold">Fask Delivery:</span>Aug 31 - Sep 24
            </p>
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full font-primary text-lg pb-2 border-b border-b-black"
              onClick={handleAccordion}
            >
              Which size should i take?{" "}
              <span>
                <ArrowDown accordion={accordion} />
              </span>
            </button>

            {accordion ? (
              <div className="space-y-2 mt-4 font-primary text-sm text-[#696969]">
                <p>Based on usual orders:</p>
                <p>
                  <span className="font-bold">XS :</span>155cm - 159cm
                </p>
                <p>
                  <span className="font-bold">S :</span>160cm - 165cm
                </p>
                <p>
                  <span className="font-bold">M :</span>166cm - 175cm
                </p>
                <p>
                  <span className="font-bold">L :</span>176cm - 185cm
                </p>
                <p>
                  <span className="font-bold">XL :</span>186cm - 190cm
                </p>
                <p>
                  <span className="font-bold">XXL :</span>191cm +
                </p>
              </div>
            ) : null}
          </div>

          <div>
            <img
              src={productDetails?.badge}
              alt={productDetails?.id}
              className="w-full"
            />
          </div>
        </div>
      </main>

      <hr />
      <main className="mt-[3rem]">
        <div className="font-primary text-[#696969] text-sm space-y-4">
          <h1>Art made by JosepheMichelle for</h1>
          <ul className="list-disc pl-7">
            <li>MOST ADVANCED T-SHIRT IN THE GAME </li>
            <li>HEAVY WEIGHT, 260 GSM </li>
            <li>100% COTTON</li>
          </ul>

          <p>
            Ready to ship, <br /> Crafted in China
          </p>
        </div>

        <div className="mt-[2rem] space-y-4">
          <h1 className="font-primary text-3xl">You Might Also Like</h1>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((singleProductItem) => (
                <ProductCard
                  singleProductItem={singleProductItem}
                  key={singleProductItem.id}
                />
              ))
            ) : (
              <h3 className="font-primary text-base">No Products Found :(</h3>
            )}
          </div> */}
        </div>
      </main>
    </>
  );
}

export default DetailsCard;
