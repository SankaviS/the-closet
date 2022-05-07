import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/wishlist">wishlist</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
