import { useContext, useState } from "react";

import EmptyCart from "../EmptyCart/EmptyCart";
import { CartContext } from "../../context/CartContext";

import "./CartPage.css";

function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const renderCartItem = (cartItems, increaseQuantity, decreaseQuantity) => {
    return cartItems.map((item) => {
      return (
        <div className="cart__item" key={item.id}>
          <div className="cart__item__left">
            <div className="item__image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item__details">
              <div className="item__details__top">
                <p>{item.title}</p>
              </div>
              <div className="item__details__bottom">
                <div className="quantity__controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__item__right">
            <div className="item__price">
              <p>${item.price * item.quantity}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="cart__items">
      <div className="cart__items__container">
        <h1>Shopping Cart</h1>
        <p className="price__text">Price</p>
        {renderCartItem(cartItems, increaseQuantity, decreaseQuantity)}
      </div>
      <div className="total__price">
        <p>
          Subtotal ({cartItems.length} items): <span>${totalPrice}</span>
        </p>
      </div>
      <div className="product__buy">
        <button>Proceed to buy</button>
      </div>
    </div>
  );
}

export default CartPage;
