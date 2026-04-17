import ProductGrid from "../ProductGrid/ProductGrid.jsx";
import "./Products.css";

function Products({ products, showFilters }) {
  return (
    <div className="products">
      <ProductGrid products={products} showFilters={showFilters} />
    </div>
  );
}

export default Products;
