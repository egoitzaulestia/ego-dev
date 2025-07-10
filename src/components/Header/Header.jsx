import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav aria-label="main navigation" className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to={"/"} className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to={"/about"} className="menu__link">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link to={"/contact"} className="menu__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
