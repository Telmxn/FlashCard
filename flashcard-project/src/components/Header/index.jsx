import { Link } from "react-router-dom";
import Menu from "../Menu";
import style from "./header.module.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className={style.logo}>
        Logo
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
