import SearchBar from "../SearchBar/SearchBar.jsx"; //Importa el componente SearchBar
import { images } from "../../assets/images/images.js"; //Importa las imágenes de images
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ onSearch }) {
  console.log("Header renderizado"); // Console.log por motivos de debugging

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          {console.log("IMAGES:", images)} {/* Console.log por motivos de debugging */}
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
      <SearchBar onSearch={onSearch} /> {/* Se pasa el onSearch al SearchBar */}
    </header>
  );
}

export default Header;
