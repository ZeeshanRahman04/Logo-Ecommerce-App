import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";
import Header from "../Header/Header";

function ProductDetails() {
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  // 1. Wait for data
  if (!products.length) {
    return <p>Loading...</p>;
  }

  // 2. Find product
  const product = products.find((p) => p.id === Number(id));
  console.log(product);

  // 3. Handle invalid ID
  if (!product) {
    return <p>Product not found</p>;
  }

  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === product.id);

  // 4. Render product
  return (
    <div className="product__details">
      <div className="product__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product__info">
        <h2>{product.title}</h2>
        <div className="product__description">
          <h3>About this Item </h3>
          <p>{product.description}</p>
        </div>
        <p className="product__price">$ {product.price}</p>
        <p className="category">
          <span>Category:</span> {product.category}
        </p>
        <p className="rating">
          <span>Rating:</span> {product.rating} ⭐
        </p>

        {/* CONDITIONAL UI */}
        <div className="product__info__bottom">
          {!cartItem ? (
            <button className="btn--cart" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          ) : (
            <div className="quantity__controls">
              <button onClick={() => decreaseQuantity(cartItem.id)}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
