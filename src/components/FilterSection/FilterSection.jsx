import "./FilterSection.css";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

function FilterSection({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowFilterOptions() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="filter__section">
      <div className="filter__section__container">
        <div className="filter__section__info">
          <p className="filter__section__title">{options.title}</p>
          <p className="filter__section__selected">All</p>
          {isOpen && <FilterOption options={options} />}
        </div>
        <button className="arrow-down" onClick={handleShowFilterOptions}>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
    </div>
  );
}

const FilterOption = ({ options }) => {
  return (
    <div className="filter__options">
      <button className="btn--unselect">Unselect all</button>

      {options.category.map((labelValue) => (
        <label key={labelValue} className="filter__item">
          <input type="checkbox" name={labelValue} />
          <span>{labelValue}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterSection;
