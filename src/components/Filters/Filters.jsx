import React, { useState } from "react";
import "./Filters.css";
import FilterSection from "../FilterSection/FilterSection.jsx";

const options = [
  {
    title: "IDEAL FOR",
    category: ["Men", "Women", "Boys", "Girls"],
  },
  {
    title: "CATEGORY",
    category: [
      "Men's Clothing",
      "Women's Clothing",
      "Jewellery",
      "Electronics",
    ],
  },
  {
    title: "RATING",
    category: ["4⭐️ & above", "3⭐️ & above", "2⭐️ & above"],
  },
];

function Filters() {
  return (
    <div className="filters">
      {/* Customizable Filter */}
      <div className="filter-item">
        <input type="checkbox" id="customize" value="customizable" />
        <label htmlFor="customize">CUSTOMIZBLE</label>
      </div>
      {options.map((eachOption) => (
        <FilterSection options={eachOption} key={eachOption.title} />
      ))}
    </div>
  );
}

export default Filters;
