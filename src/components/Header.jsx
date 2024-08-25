import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className="border-b border-red-600 py-4">
      <div className="flex items-center justify-center gap-[10rem]">
        <Link to={"/"}>
          <h1 className="animate-rainbow font-primary font-bold text-[12px]">
            tern®
          </h1>
        </Link>

        <div className="flex justify-center space-x-[3rem] text-[13px] font-light">
          <ul className="space-x-8">
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
