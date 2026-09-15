
function SearchBar({ valor, onBuscar }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Buscar país por nombre..."
      value={valor}
      // onChange es el evento; cada vez que el usuario teclea,
      // llamamos a onBuscar(texto) para que el PADRE actualice su estado.
      onChange={(evento) => onBuscar(evento.target.value)}
    />
  );
}

export default SearchBar;
