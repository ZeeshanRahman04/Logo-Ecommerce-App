import "./ProductCard.css";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductCard({ productDetails }) {
  const uniqueId = productDetails.id;

  return (
    <div className="product__card">
      <Link to={`/products/${uniqueId}`}>
        <img src={productDetails.image} alt="" />
        <p className="product__title">{productDetails.title}</p>
      </Link>
      <div className="card__container">
        {/* <p className="signin--text">
          <span className="sign--in">Sign in</span> or create an account to see
          pricing
          </p> */}
        {/* <span>
          <BsHeart />
          </span> */}

        <p className="product__rating">
          <span>{productDetails.rating}</span>
          rating
        </p>
        <p className="product__price">${productDetails.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
