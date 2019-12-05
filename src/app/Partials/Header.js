import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          BIT BLOG
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a>AUTHOR</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
