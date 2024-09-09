import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MobileNav({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  function handleNavigatetoLogin() {
    setIsOpen(false)
    navigate("/login")
  }

  function handleNavigatetoRegister() {
    setIsOpen(false)
    navigate("/register")
  }
  return (
    <div
      className={`w-[90%] left-0 md:hidden  h-[1000vh] mx-auto absolute z-10 transform transition-transform duration-500 ease-in-out  bg-white shadow-right-custom  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <ul className="font-light flex flex-col space-y-6 pt-2 pl-6">
        <Link className="font-primary ">SHOP ALL</Link>
        <Link className="font-primary">T-SHIRTS</Link>
        <Link className="font-primary">SHORTS & PANTS</Link>
        <Link className="font-primary">HOODIES</Link>
        <Link className="font-primary">KNITS</Link>
        <Link className="font-primary">JACKETS</Link>
        <Link className="font-primary">HEADWEAR</Link>
        <Link className="font-primary">NEED HELP?</Link>
        <button onClick={handleNavigatetoLogin} className="bg-black self-start font-primary text-white w-[90%] py-3 rounded-xl">
          Log In
        </button>
        <button onClick={handleNavigatetoRegister} className="bg-white self-start font-primary text-black w-[90%] py-3 rounded-xl border-2 border-black">
          Register
        </button>
      </ul>
    </div>
  );
}

export default MobileNav;
