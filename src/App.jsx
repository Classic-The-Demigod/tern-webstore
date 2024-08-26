import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

function App() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <MobileNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
      </section>
     

    
    </>
  );
}

export default App;
