import "./VariantButton.css";

function VariantButton({ variant, isSelected, onSelect }) {// Botón que se activa si es que existe mas de un color -> variant 
  return (
    <button
      className={`variant-button ${isSelected ? "active" : ""}`}
      onClick={() => onSelect(variant)}
    >
      {variant.color}
    </button>
  );
}

export default VariantButton;
