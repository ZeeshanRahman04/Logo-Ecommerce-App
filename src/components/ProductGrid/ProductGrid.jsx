import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard.jsx";

function ProductGrid({ products, showFilters }) {
  return (
    <div
      className={`products__grid__container ${showFilters ? "with__filters" : "full__width"}`}
    >
      {products.map((product) => (
        <ProductCard productDetails={product} key={product.title} />
      ))}
    </div>
  );
}

export default ProductGrid;
