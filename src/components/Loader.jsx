// este es un componente simple, reutilizado en cada página mientras
// useFetch esta en su estado "cargando: true"
function Loader() {
  return (
    <div className="loader">
      <div className="loader-spinner" />
      <p>Cargando...</p>
    </div>
  );
}

export default Loader;
