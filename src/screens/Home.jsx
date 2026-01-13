import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import products from "../data/product.json";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Catálogo Online</h1>

      {/* si tu Header tiene buscador, aquí puedes ponerlo también */}
      <ProductList
        products={products}
        searchTerm={searchTerm}
      />
    </>
  );
}

export default Home;
