import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import "./App.css";
import CartPage from "./components/CartPage/CartPage.jsx";

import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Providers from "./context/Providers.jsx";

import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="app__container">
      <Providers>
        {location.pathname !== "/login" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Providers>
    </div>
  );
}
export default App;
