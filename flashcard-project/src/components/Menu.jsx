import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="menu">
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
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </>
  );
};

export default Menu;
