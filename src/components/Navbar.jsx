import { useState } from "react";
import { NavLink } from "react-router-dom";
import closeBtn from './closeBtn.svg';

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav>
      <h1>Project-name</h1>
      {/* hamburger */}
      <div
        className="hamburger cursor-pointer"
        onClick={() => setMenuState((prevState) => !prevState)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* menu container */}
      <div className={menuState ? `menu-container` : `hidden`}>
        {/* close button */}
        <div
          className="close-btn cursor-pointer"
          onClick={() => setMenuState((prevState) => !prevState)}
        >
          <img src={closeBtn} alt="close button" />
        </div>
        {/* menu */}
        <ul className="menu">
          <NavLink
            to="/"
            onClick={() => setMenuState((prevState) => !prevState)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuState((prevState) => !prevState)}
          >
            About
          </NavLink>
          <NavLink
            to="/users"
            onClick={() => setMenuState((prevState) => !prevState)}
          >
            Users
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
