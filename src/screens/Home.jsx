import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import products from "../data/product.json";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Header onSearch={setSearchTerm} />
            <h1>Catálogo Online</h1>

            <ProductList
                products={products}
                searchTerm={searchTerm}
            />

            <Footer />
        </>
    );
}

export default Home;
