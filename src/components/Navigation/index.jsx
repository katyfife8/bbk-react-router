import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import NavLogo from "./NavLogo";

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <nav className="nav-container">
          <NavLogo />
          <ul className="nav-links">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Work</NavLink>
            </li>

            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
