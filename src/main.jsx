import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartProvider from "./context/CartContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  </StrictMode>
);
