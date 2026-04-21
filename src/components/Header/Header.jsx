import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Top Bar */}
        <div className="header__top">
          {/* Left Logo Icon */}
          <Link to="/" className="header__logo-icon">
            <img src="/icons/Vector.svg" alt="Logo icon" />
          </Link>

          {/* Center Brand Logo */}
          <Link to="/" className="header__logo-text">
            <img src="/icons/LOGO.svg" alt="Brand logo" />
          </Link>

          {/* Right Icons */}
          <div className="header__actions">
            <Link to="/search">
              <img src="/icons/search-normal.svg" alt="Search" />
            </Link>
            <Link to="/wishlist">
              <img src="/icons/heart.svg" alt="Wishlist" />
            </Link>
            <Link to="/cart">
              <img src="/icons/shopping-bag.svg" alt="Cart" />
            </Link>
            {/* <img src="/icons/profile.svg" alt="User" /> */}
            <button className="btn--signout" onClick={handleSignOut}>
              Sign out
            </button>

            <div className="languages">
              <span>ENG</span>
              <img src="/icons/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link to="/skills">CATEGORIES</Link>
            </li>
            <li>
              <Link to="/stories">STORIES</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
