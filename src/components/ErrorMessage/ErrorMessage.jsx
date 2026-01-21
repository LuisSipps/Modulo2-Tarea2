import "./ErrorMessage.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <h2>Algo salió mal 😢</h2>
      <p>{message}</p>

      {onRetry && (
        <button onClick={onRetry}>
          Reintentar
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
