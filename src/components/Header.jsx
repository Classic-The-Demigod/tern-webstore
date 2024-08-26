import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";

function Header({ isOpen, setIsOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header
      className={`py-4 sticky top-0 z-10 bg-white  ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center gap-[5rem] w-[90%] md:w-[80%] mx-auto">
        <button className="md:hidden" onClick={toggleMenu}>
          <div className="relative inline-block  w-[20px] h-[12px] cursor-pointer">
            <div
              className={`mt-[-1px] top-[50%] block w-full h-[2px] absolute left-0 bg-black before:content-[''] before:w-full before:h-[2px] before:bg-black before:absolute before:block before:top-[-7px] after:content-[''] after:w-full after:h-[2px] after:bg-black after:absolute after:block after:bottom-[-7px] transition-all duration-[5ms] ease-in-out
                ${isOpen ? "bg-transparent" : ""}
                ${
                  isOpen
                    ? "before:transform before:rotate-45 before:translate-y-[7px] "
                    : ""
                }
                ${
                  isOpen
                    ? "after:transform after:-rotate-45 after:-translate-y-[7px] "
                    : ""
                }

          `}
            ></div>
          </div>
        </button>
        <Link to={"/"}>
          <h1 className="animate-rainbow font-primary font-bold text-[12px]">
            tern®
          </h1>
        </Link>

        <div className="flex justify-center space-x-[2rem] text-[13px] font-light">
          <ul className="space-x-8 md:block hidden">
            <Link className="nav-link font-primary relative pb-2">
              SHOP ALL
            </Link>
            <Link className="nav-link font-primary relative pb-2">
              T-SHIRTS
            </Link>
            <Link className="nav-link font-primary relative pb-2">
              SHORTS & PANTS
            </Link>
            <Link className="nav-link font-primary relative pb-2">HOODIES</Link>
            <Link className="nav-link font-primary relative pb-2">KNITS</Link>
            <Link className="nav-link font-primary relative pb-2">JACKETS</Link>
            <Link className="nav-link font-primary relative pb-2">
              HEADWEAR
            </Link>
            <Link className="nav-link font-primary relative pb-2">
              NEED HELP?
            </Link>
          </ul>

          <div className="flex gap-4 items-center">
            <ProfileIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
