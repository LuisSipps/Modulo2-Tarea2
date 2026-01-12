import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <ProductList products={products} />;

  /* return (
    <section>
      <h1>Inventario completo</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  ); */
}

export default Inventory;
