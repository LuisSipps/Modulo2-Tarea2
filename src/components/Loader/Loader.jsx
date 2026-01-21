import "./Loader.css";

function Loader({ count = 10, message = "Cargando productos..." }) {
    return (
        <div className="loader-wrapper">
            <p className="loader-text">{message}</p>

            <div className="product-container">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="skeleton-card" />
                ))}
            </div>
        </div>
    );
}

export default Loader;
