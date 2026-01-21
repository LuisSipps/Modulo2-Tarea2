import { useState } from "react";
import "./ProductCard.css";
import { images } from "../../assets/images/images";
import VariantButton from "../VariantButton/VariantButton.jsx";

function ProductCard({ product }) {
  const hasVariants =
    Array.isArray(product.variants) && product.variants.length > 0;

  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

  let imageSrc;

  /* Lógica para productos del JSON ó de la URL */

  if (hasVariants && selectedVariant?.image) {
    imageSrc = images[selectedVariant.image];
  } else if (product.thumbnail) {
    imageSrc = product.thumbnail;
  } else if (product.image) {
    imageSrc = images[product.image];
  } else {
    imageSrc = "/no-image.png";
  }

  const title = product.name || product.title;
  const description = product.descripcion || product.description || "";
  const category = product.category || "Sin categoría";

  return (
    <div className="stylo-card">
      <img
        src={imageSrc}
        alt={title}
        className="product-image"
      />

      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <p><strong>Categoría:</strong> {category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      {hasVariants && (
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
