import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import products from "../data/product.json";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Home.css"

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Header onSearch={setSearchTerm} />

            <div className="body-home">
                <h1>Catálogo Online</h1>
                <ProductList
                products={products}
                searchTerm={searchTerm}
                />
            </div>
            
            <Footer />
        </>
    );
}

export default Home;
