import React from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="w-[90%] mx-auto absolute z-10  bg-white">
      <ul className="font-light flex flex-col space-y-6 pl-6">
        <Link className="font-primary ">SHOP ALL</Link>
        <Link className="font-primary">T-SHIRTS</Link>
        <Link className="font-primary">SHORTS & PANTS</Link>
        <Link className="font-primary">HOODIES</Link>
        <Link className="font-primary">KNITS</Link>
        <Link className="font-primary">JACKETS</Link>
        <Link className="font-primary">HEADWEAR</Link>
        <Link className="font-primary">NEED HELP?</Link>
      </ul>
    </div>
  );
}

export default MobileNav;
