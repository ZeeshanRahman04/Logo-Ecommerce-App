import React, { useEffect, useState } from "react";

export const ProductContext = React.createContext({
  products: [],
  setProducts: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiUrl = "https://fakestoreapi.com/products";
        const options = {
          method: "GET",
        };

        const response = await fetch(apiUrl, options);
        if (response.ok === true) {
          const fetchedData = await response.json();
          console.log(fetchedData);
          const formattedData = fetchedData.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            category: item.category,
            rating: item.rating.rate,
            description: item.description,
          }));
          formattedData.sort((a, b) => b.rating - a.rating);
          setProducts(formattedData);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
