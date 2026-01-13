import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductList from "../components/ProductList/ProductList";

function Inventory() {
    console.log("Dentro de inventario");
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Error al cargar productos");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        {console.log("Dentrol return de inventario")}
            <h1>Inventario desde API</h1>
            <ProductList products={products} />
        </>
    );
}

export default Inventory;
