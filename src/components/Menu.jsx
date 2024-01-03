import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from 'react';


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ul className={`${menuOpen ? "active" : ""} menu`}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " menu-btn"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/flashcards"}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " menu-btn"
            }
          >
            Flash Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              (isActive ? "active" : "") + " menu-btn"
            }
          >
            Contact me
          </NavLink>
        </li>
      </ul>
      <div className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
        <i className={`${menuOpen ? "active" : ""} fas fa-bars`}></i>
      </div>
    </>
  );
};

export default Menu;
