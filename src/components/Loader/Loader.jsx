import "./Loader.css";

function Loader({ count = 10 }) {
  return (
    <div className="product-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card" />
      ))}
    </div>
  );
}

export default Loader;
