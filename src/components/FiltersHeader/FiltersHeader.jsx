import "./FiltersHeader.css";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function FiltersHeader({ productsLength, toggleFilters, showFilters }) {
  return (
    <div className="filters__header">
      <div className="filters__header__container">
        {/* LEFT */}
        <div className="filters__left">
          <p className="items-count">{productsLength} ITEMS</p>

          <button className="filters--btn" onClick={toggleFilters}>
            {showFilters ? (
              <>
                <BsChevronLeft />
                <span className="underline-text">HIDE FILTERS</span>
              </>
            ) : (
              <>
                <BsChevronRight />
                <span className="underline-text">SHOW FILTERS</span>
              </>
            )}
          </button>
        </div>

        {/* RIGHT */}
        <div className="filter__options">
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FiltersHeader;
