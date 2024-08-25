import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
