import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
