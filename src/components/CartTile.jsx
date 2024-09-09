import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/CartContext";

function CartTile({ singleCartItem }) {
  const { handleAddToCart, handleRemoveFromCart } =
    useContext(ShoppingCartContext);
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img
          className="w-[120px] border  hover:border-black transition:border duration-300 ease-in border-gray-200 rounded"
          src={singleCartItem?.image}
          alt={singleCartItem?.title}
        />
      </div>
      <div className="space-y-2">
        <h1>{singleCartItem?.title}</h1>
        <h1 className="text-gray-400 font-light">Size: S</h1>
        <h1>${singleCartItem?.price}</h1>

        <div className="flex items-center justify-between border border-gray-300 px-3 py-1 rounded-md w-[100px]">
          <button onClick={() => handleRemoveFromCart(singleCartItem, false)}>
            -
          </button>
          {/* <input className='w-[20px]' type="text" name="" id="" value={singleCartItem?.quantity}/> */}
          <span>{singleCartItem?.quantity}</span>
          <button onClick={() => handleAddToCart(singleCartItem)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartTile;
