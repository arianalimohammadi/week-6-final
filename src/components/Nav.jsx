import React from "react";
import logo from "../assets/favicon.png"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__link nav__link--hover">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__link nav__link--hover">
            <Link to="/movies" className="nav__link">
              Movies
            </Link>
          </li>
          <li className="nav__link contact__button button__hover">
            <Link to="mailto:amohammadi@alumni.berklee.edu" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
