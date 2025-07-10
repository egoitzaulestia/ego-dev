import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav aria-label="main navigation" className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="/about">About</a>
          </li>
          <li className="menu__item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
