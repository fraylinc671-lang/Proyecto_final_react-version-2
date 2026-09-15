// se utiliza en cada pagina que use la api, cuando useFetch
// devuelve un error != null. "mensaje" es el prop con el texto del error.
function ErrorMessage({ mensaje }) {
  return (
    <div className="error-message">
      <p>⚠ Ocurrió un problema: {mensaje}</p>
    </div>
  );
}

export default ErrorMessage;
