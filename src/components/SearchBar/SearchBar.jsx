import { useState } from "react"; //función de React para manejar estados del componente
import "./SearchBar.css";

//función que recibe componente onSearch
function SearchBar({ onSearch }) {
  const [value, setValue] = useState(""); //Se guarda lo que el usuario escribe en el buscador

  const handleChange = (e) => { //Se ejecuta cada vez que el usuario escribe en el buscador
    const text = e.target.value; //Se captura el texto actual
    console.log("Buscando:", text); //Se muestra por consola lo que el usuario esta escribiendo por motivos de debugging
    setValue(text); //Actualizamos el estado del input
    onSearch(text); //Se envía el texto al componente padre
  };

  return (
    <input
      type="text"
      placeholder="Busca tus productos o animes preferidos aquí"
      className="search-bar"
      value={value}
      onChange={handleChange} //Evento del input cada vez que se modifica, borra o escribe texto
    />
  );
}

export default SearchBar;