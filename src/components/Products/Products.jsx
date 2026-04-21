import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

function Products({ products, showFilters }) {
  return (
    <div className="products">
      <div
        className={`products__grid__container ${showFilters ? "with__filters" : "full__width"}`}
      >
        {products.map((product) => (
          <ProductCard productDetails={product} key={product.title} />
        ))}
      </div>
    </div>
  );
}

export default Products;
