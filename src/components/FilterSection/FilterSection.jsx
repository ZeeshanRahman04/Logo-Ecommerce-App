import "./FilterSection.css";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function FilterSection({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowFilterOptions() {
    setIsOpen((prev) => !prev);
  }

  function renderOptions(categories) {
    return categories.map((labelValue) => (
      <label key={labelValue} className="filter__item">
        <input type="checkbox" name={labelValue} />
        <span>{labelValue}</span>
      </label>
    ));
  }

  return (
    <div className="filter__section">
      <div className="filter__section__container">
        <div className="filter__section__info">
          <p className="filter__section__title">{options.title}</p>
          <p className="filter__section__selected">All</p>

          {isOpen && (
            <div className="filter__options">
              <button className="btn--unselect">Unselect all</button>
              {renderOptions(options.category)}
            </div>
          )}
        </div>

        <button className="arrow-down" onClick={handleShowFilterOptions}>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
