import { useContext } from "react"
import { ShoppingCartContext } from "../context/CartContext"
import CartTile from "./CartTile"


function CartModal({ isModalOpen, setIsModalOpen }) {

  
  
  return (
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-10` }
      ></div>
      <section className={`fixed top-0 right-0 h-full md:w-[500px] w-[90%] bg-white shadow-lg z-10 overflow-hidden transform transition-transform duration-300 ease-in-out ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <main className="px-4 py-6 space-y-4 font-primary">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>

          <div className="flex flex-col gap-4">
            {/* {cartItems.length > 0 ? (
              cartItems.map((singleCartItem) => (
                <CartTile
                  singleCartItem={singleCartItem}
                  key={singleCartItem?.id}
                />
              ))
            ) : (
              <h1>Add Some Items!</h1>
            )} */}
          </div>
        </main>
      </section>
    </>
  );
}

export default CartModal