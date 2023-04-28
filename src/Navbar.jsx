import React from "react";
import {useRef} from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_navbar");
  }
  
  return (
    <div className="header">
      <nav className="navbar" ref={navRef}>
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
        {/*<button className="navbar_button navbar_close_button" onClick={showNavbar}>
            <FaTimes/>
  </button>*/}
      </nav>
      <button className="navbar_button" onClick={showNavbar}>
          <FaBars />
      </button>
      <Outlet />
    </div>
  );
}

export default Navbar;
