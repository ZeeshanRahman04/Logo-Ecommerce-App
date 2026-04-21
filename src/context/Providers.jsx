import CartProvider from "./CartContext.jsx";
import ProductProvider from "./ProductContext.jsx";

const Providers = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};

export default Providers;
