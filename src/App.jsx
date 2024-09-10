import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import Page404 from "./pages/404Page";
import CartModal from "./components/CartModal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthRoute from "./components/AuthRoute";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative">
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        {isOpen ? <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
        {isModalOpen ? (
          <CartModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}

        <Routes>
          {/* <Route element={<AuthRoute />}>

          <Route path="/" element={<Home />} />

          </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </section>
    </>
  );
}

export default App;
