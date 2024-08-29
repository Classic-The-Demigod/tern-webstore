import Truck from "./Truck";

function DetailsCard({ productDetails }) {

  return (
    <main className="flex gap-8 md:flex-row flex-col">
      <div>
        <img className="w-[500px] flex-1" src={productDetails?.image} alt="" />
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
                  key={thumbnail}
                  className="border  hover:border-black transition:border duration-300 ease-in border-gray-200 rounded"
                >
                  <img
                    className="w-[60px] rounded-md"
                    src={thumbnail}
                    alt={productDetails.title}
                  />
                </button>
              ))
            : null}
        </div>

        <button className="border-black  text-black border py-3 px-8 rounded-lg hover:bg-black hover:text-white transition:all duration-300 ease-in">
          Add To Cart
        </button>
        <button className=" text-white border py-3 px-8 rounded-lg  bg-gray-800 hover:bg-black transition:all duration-300 ease-in">
          Buy it now
        </button>
        <div className="flex gap-2">
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
          <p className="font-primary"><span className="font-bold">Fask Delivery:
          </span>Aug 31 - Sep 24
          </p>
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
  );
}

export default DetailsCard;
