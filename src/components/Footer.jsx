import { Link } from "react-router-dom";
import ExpressIcon from "./AmericanExpressIcon";
import ApplePay from "./ApplePayIcon";
import ObIcon from "./OBIcon";
import MastercardIcon from "./MasterCardIcon";
import Visa from "./VisaIcon";

function Footer() {
  return (
    <footer className="font-primary bg-gray-200 py-8 text-gray-500">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 text-[13px]">
            <div className="flex justify-between">
              <p>What's</p>
              <Link to={"/"}>
                <h1 className="animate-rainbow font-primary font-bold text-[12px]">
                  tern®
                </h1>
              </Link>
            </div>
            <p>
              tern is managed by a team of young creatives in France,
              reminiscing their first Internet memories through clothing.
              <br />
              <br />
              powered by Forever Vacation & toujou.rs
            </p>
          </div>
          <div className=" text-[13px] flex flex-col gap-4">
            <h1 className="font-bold">Learn More</h1>
            <div className="flex flex-col space-y-1">
              <p>Affiliate Program</p>
              <p>Terms and condition of sale</p>
              <p>Shipping Policy</p>
              <p>Refund Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className=" text-[13px] flex flex-col gap-4">
            <h1 className="font-bold">Need help?</h1>
            <div className="flex flex-col space-y-1">
              <p>→ track my order</p>
              <p>Information about my order</p>
              <p>Information about delivery</p>
              <p>Information about our products</p>
            </div>
          </div>
        </div>
      <div className="text-[13px] text-black flex flex-col md:flex-row justify-between mt-[4rem] gap-4">
        <p>tern® powered by Forever Vacation - 2024</p>

          <div className="flex gap-2">
            <ExpressIcon />
            <ApplePay />
            <ObIcon />
            <MastercardIcon />
            <Visa />
          </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
