import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, searchTerm = "" }) {

  const filteredProducts = products.filter((product) => {

    const name = product.name || product.title || "";
    return name.toLowerCase().includes(searchTerm.toLowerCase());

  });

  return (
    <div className="product-container">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product} />
      ))}
    </div>
  );
}

export default ProductList;