import "./VariantButton.css";

function VariantButton({ variant, isSelected, onSelect }) {// Botón que se activa si es que existe mas de un color -> variant 
  return (
    <button /* Se aplica VariantButton si la variante esta seleccionada y está activa */
      className={`variant-button ${isSelected ? "active" : ""}`}
      onClick={() => onSelect(variant)}
    >
      {/* Muestra el color de la variante */}
      {variant.color}
    </button>
  );
}

export default VariantButton;
