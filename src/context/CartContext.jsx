import React from "react";
import { useState } from "react";

export const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const cartMap = new Map(prevCartItems.map((item) => [item.id, item]));

      if (cartMap.has(product.id)) {
        const item = cartMap.get(product.id);
        cartMap.set(product.id, { ...item, quantity: item.quantity + 1 });
      } else {
        cartMap.set(product.id, { ...product, quantity: 1 });
      }

      return Array.from(cartMap.values());
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
