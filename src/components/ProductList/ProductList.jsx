import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, searchTerm }) {/* función con props de productos y el searchTerm que lo escribe el usuario  */
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
  /* products.filter recorre la lista de productos, product y searchTerm los convierte en minusculas, se entrega un true si coinciden */
  );

  return (
    <div className="product-container">
      {filteredProducts.map((product) => ( /* Se recorren los productos filtrados */
        <ProductCard key={product.id} product={product} /> /* Se renderiza un Card a partir de un id y su info */
      ))}
    </div>
  );
}

export default ProductList;