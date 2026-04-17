import React, { useState } from "react";
import "./Filters.css";
import FilterSection from "../FilterSection/FilterSection.jsx";

const options = [
  {
    title: "IDEAL FOR",
    category: ["Men", "Women", "Boys", "Girls"],
  },
  {
    title: "OCCASION",
    category: ["Casual", "Formal", "Party", "Wedding", "Sports"],
  },
  {
    title: "WORK",
    category: ["Office Wear", "Daily Wear", "Travel", "Home"],
  },
  {
    title: "FABRIC",
    category: ["Cotton", "Polyester", "Wool", "Silk", "Denim"],
  },
  {
    title: "SEGMENT",
    category: ["Premium", "Luxury", "Budget", "Mid-Range"],
  },
  {
    title: "SUITABLE FOR",
    category: ["Summer", "Winter", "All Season"],
  },
  {
    title: "RAW MATERIALS",
    category: ["Organic", "Synthetic", "Blended"],
  },
  {
    title: "PATTERN",
    category: ["Solid", "Printed", "Striped", "Checked"],
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
