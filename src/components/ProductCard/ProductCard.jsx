import { useState } from "react";
import "./ProductCard.css";
import { images } from "../../assets/images/images";
import VariantButton from "../VariantButton/VariantButton.jsx"; // Componente importado del boton para elegir colores

function ProductCard({ product }) {
  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0; /* Duelve true si variants existe es un array y tiene al menos un elemento*/

  const [selectedVariant, setSelectedVariant] = useState( /* Si existen variantes pone la primera por defecto, sino Null */
    hasVariants ? product.variants[0] : null
  );

  const imageSrc = hasVariants  /* Si hay variantes usa la imagen de la variante, si no solo pone la imagen del producto */
    ? images[selectedVariant.image]
    : images[product.image];

  return (
    <div className="stylo-card">
      <img
        src={imageSrc}
        alt={product.name}
        className="product-image"
      />

      <h2>{product.name}</h2>
      <p>{product.descripcion}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      {hasVariants && ( /* Se renderizan los botones si existen variantes */
        <div className="variant-buttons">
          {product.variants.map((variant) => (

            <VariantButton
              key={variant.color}
              variant={variant}
              isSelected={selectedVariant.color === variant.color}
              onSelect={setSelectedVariant}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
