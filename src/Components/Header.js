import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return <header className="Header">
    <NavLink to='/'>
        <h2 className="logo">HS Products</h2>
    </NavLink>
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/Products-Page">Product Page</NavLink>
        </li>
      </ul>
    </nav>
  </header>;
};

export default Header;
