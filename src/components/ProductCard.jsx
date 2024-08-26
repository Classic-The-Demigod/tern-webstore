
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ singleProductItem }) {
  const navigate = useNavigate()
  function handleNavigateToProductDetailsPage(getCurrentProductId) {

  navigate(`/product-details/${getCurrentProductId}`);
}

  return (
    <div>
      <button
        onClick={() => {
          handleNavigateToProductDetailsPage(singleProductItem?.id);
        }}
      >


      <div className="relative overflow-hidden group cursor-pointer">
        <img
          className="w-[300px] h-auto transition duration-300 ease-in group-hover:scale-110"
          src={singleProductItem?.image}
          alt={singleProductItem.title}
        />
        {singleProductItem?.id <= 2 ? (
          <div className="text-[10px] bg-blue-700 absolute top-2 left-2 px-2 py-1 rounded-2xl text-white">
            <p>NEW</p>
          </div>
        ) : null}
      </div>

      </button>

      <div className="text-[13px] font-primary mt-4">
        <h1>{singleProductItem?.title}</h1>
        <p className="mt-1">${singleProductItem?.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
