import { Link } from "react-router-dom";
import Menu from "../Menu";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
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
