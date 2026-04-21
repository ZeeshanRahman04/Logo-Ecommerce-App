import "./FiltersHeader.css";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function FiltersHeader({
  productsLength,
  toggleFilters,
  showFilters,
  onChangeSortProducts,
}) {
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
          <select onChange={(e) => onChangeSortProducts(e.target.value)}>
            <option value="popular">POPULAR</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FiltersHeader;
