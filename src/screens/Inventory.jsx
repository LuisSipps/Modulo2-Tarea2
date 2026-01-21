import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductList from "../components/ProductList/ProductList";
import "./Inventory.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


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
      <Header
        title="Inventario completo"
        subtitle="Listado completo obtenido desde la API"
        onSearch={setSearchTerm}
      />
      <div className="body-content">
        <ProductList
          products={products}
          searchTerm={searchTerm} />
      </div>

      <Footer />
    </>
  );
}

export default Inventory;
