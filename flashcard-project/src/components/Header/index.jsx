import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu";
import "./header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav
        className={`navbar ${location.pathname == "/contact" ? "fixed" : ""}`}
      >
        <div className="max-width">
          <div className="logo">
            <Link to={"/"}>
              Web<span>Flow</span>
            </Link>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
