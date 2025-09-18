//imports obrigatórios
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

//imports dos styles
import "./styles/main.css";
import "./styles/reset.css";

//imports dos componentes
import NavBar from "./components/tsx/NavBar";
import ProductsPage from "./pages/tsx/ProductsPage";
import ProductDetailPage from "./pages/tsx/ProductDetailPage";
import FavoritesPage from "./pages/tsx/FavoritesPage";
import CartPage from "./pages/tsx/CartPage";
import ProductsCategoryPage from "./pages/tsx/ProductsCategoryPage";
import NotFoundPage from "./pages/tsx/NotFoundPage";
import { CartProvider } from "./components/tsx/CartContext";
import CartNotification from "./components/tsx/CartNotification";
import { FavoritesProvider } from "./components/tsx/FavoritesContext";
import FavsNotification from "./components/tsx/FavsNotification";
import Footer from "./components/tsx/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          <CartNotification />
          <FavsNotification />
          <NavBar />

          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/category/:categoryName"
              element={<ProductsCategoryPage />}
            />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
