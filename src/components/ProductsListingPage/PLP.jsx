import { useEffect, useState } from "react";

import "./PLP.css";

import FiltersHeader from "../FiltersHeader/FiltersHeader.jsx";
import Filters from "../Filters/Filters.jsx";
import Products from "../Products/Products.jsx";

function PLP() {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  function onClickToggleFilters() {
    setShowFilters((prev) => !prev);
  }

  useEffect(() => {
    const getProducts = async () => {
      const apiUrl = "https://fakestoreapi.com/products";
      const options = {
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      if (response.ok === true) {
        const fetchedData = await response.json();
        const formattedData = fetchedData.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          category: item.category,
          rating: item.rating.rate,
          count: item.rating.count,
        }));
        setProducts(formattedData);
      } else {
        throw new Error("Failed to fetch products");
      }
    };
    getProducts();
  }, []);

  return (
    <div className="product__listing__page">
      <FiltersHeader
        productsLength={products.length}
        toggleFilters={onClickToggleFilters}
        showFilters={showFilters}
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
