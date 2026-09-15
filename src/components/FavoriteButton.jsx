import { useFavoritos } from '../context/FavoritosContext';

// boton que  se reutiliza en la tarjeta de la lista Y en la página de detalle
// Consume el contexto directamente (no necesita que se lo pasen como prop)
function FavoriteButton({ pais }) {
  const { esFavorito, agregarFavorito, quitarFavorito } = useFavoritos();
  const activo = esFavorito(pais.alpha3Code);

  function manejarClick(evento) {
    // stopPropagation evita que el click suba  por ejemplo,
    // la navegación de la tarjeta si el botón está dentro de un Link.
    evento.stopPropagation();
    evento.preventDefault();
    if (activo) {
      quitarFavorito(pais.alpha3Code);
    } else {
      agregarFavorito(pais);
    }
  }

  return (
    <button
      className={`favorite-btn ${activo ? 'activo' : ''}`}
      onClick={manejarClick}
      aria-label={activo ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      {activo ? '★ Favorito' : '☆ Agregar'}
    </button>
  );
}

export default FavoriteButton;