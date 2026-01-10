import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import ProductList from './components/ProductList/ProductList.jsx';
import Footer from './components/Footer/Footer.jsx';
import products from './data/product.json'; // Datos de productos

function App() {
  console.log("App se está renderizando"); // Mensaje por motivos de debugging
  const [searchTerm, setSearchTerm] = useState(""); // searchTerm texto que escribe el usuario + setSearchTerm funcion que actualiza el texto

  return (
    <>
      <Header onSearch={setSearchTerm}/> {/* comunicación de setSearchTerm y el Header */}
      <div>
        <h1> Catálogo Online </h1>
        <ProductList products={products} searchTerm={searchTerm} /> {/* ProductList decide que mostrar filtrando productos y lo que se escribe */}
      </div>
      <Footer />
    </>
  )
}

export default App
