import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductList from "../components/ProductList/ProductList";
import "./Inventory.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;


  const filteredProducts = products.filter(product =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getProducts()
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1500); // 1.5 segundos de retraso
  }, []);

  if (loading)
    return <Loader text="Cargando inventario..." />;

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <>
      <Header
        onSearch={setSearchTerm}
      />
      <div className="body-content">
        <ProductList
          products={paginatedProducts} />
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
          >
            ← Anterior
          </button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
          >
            Siguiente →
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Inventory;
