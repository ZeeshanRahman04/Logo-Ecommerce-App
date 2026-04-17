import "./ProductCard.css";
import { BsHeart } from "react-icons/bs";

function ProductCard({ productDetails }) {
  return (
    <div className="product__card">
      <img src={productDetails.image} alt="" />
      <p className="product__title">{productDetails.title}</p>
      <div className="card__container">
        <p className="signin--text">
          <span className="sign--in">Sign in</span> or create an account to see
          pricing
        </p>
        <span>
          <BsHeart />
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
