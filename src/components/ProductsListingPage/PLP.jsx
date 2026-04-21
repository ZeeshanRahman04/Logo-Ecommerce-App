import { useContext, useEffect, useState } from "react";

import "./PLP.css";

import FiltersHeader from "../FiltersHeader/FiltersHeader.jsx";
import Filters from "../Filters/Filters.jsx";
import Products from "../Products/Products.jsx";
import { ProductContext } from "../../context/ProductContext.jsx";

function PLP() {
  const [showFilters, setShowFilters] = useState(false);
  const { products, setProducts } = useContext(ProductContext);
  console.log(...products);
  function onClickToggleFilters() {
    setShowFilters((prev) => !prev);
  }

  const onChangeSortProducts = (option) => {
    const filteredProducts = [...products];
    if (option === "popular") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (option === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      filteredProducts.sort((a, b) => a.price - b.price);
    }
    setProducts([...filteredProducts]);
  };

  return (
    <div className="product__listing__page">
      <FiltersHeader
        productsLength={products.length}
        toggleFilters={onClickToggleFilters}
        showFilters={showFilters}
        onChangeSortProducts={onChangeSortProducts}
      />
      <div
        className={`product__listing__container ${
          showFilters
            ? "product__listing__container--with--filters"
            : "product__listing__container--full"
        }`}
      >
        {showFilters && <Filters />}
        <Products products={products} showFilters={showFilters} />
      </div>
    </div>
  );
}

export default PLP;
