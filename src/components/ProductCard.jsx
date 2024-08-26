import React from "react";

function ProductCard({ singleProductItem }) {
  return (
    <div>
      <div className="relative">
        <img
          className="w-[300px]"
          src={singleProductItem?.image}
          alt={singleProductItem.title}
        />
        {singleProductItem?.id <= 2 ? (
          <div className="text-[10px] bg-blue-700 absolute top-2 left-2 px-2 py-1 rounded-2xl text-white">
            <p>NEW</p>
          </div>
        ) : null}
      </div>
      <div className="text-[13px] font-primary mt-4">
        <h1>{singleProductItem?.title}</h1>
        <p className="mt-1">${singleProductItem?.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
