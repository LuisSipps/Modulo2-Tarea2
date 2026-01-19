import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductList from "../components/ProductList/ProductList";
import "./Inventory.css";

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

  if (loading) return <p>Cargando inventario...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="inventory-page">
        <div className="inventory-header">
          <h1>Inventario completo</h1>
          <p>Listado completo obtenido desde la API</p>
        </div>
        <ProductList products={products} />
      </section>
    </>
  );
}

export default Inventory;
