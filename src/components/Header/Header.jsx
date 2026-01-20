import SearchBar from "../SearchBar/SearchBar.jsx";
import { images } from "../../assets/images/images.js";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onSearch }) {

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          {console.log("IMAGES:", images)}
          <img src={images.logo} alt="Chity Serigrafía" />
        </div>
        <nav className="menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/inventory" className="menu-item">
            Inventario
          </Link>
        </nav>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Header;
