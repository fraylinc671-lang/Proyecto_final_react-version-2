import { useFavoritos } from '../context/FavoritosContext';
import CountryCard from '../components/CountryCard';

// Esta página NO usa useFetch,  por que no consume la api sino que lee directo del contexto global que a su ves perciste gracias al local storage 

function FavoritosPage() {
  const { favoritos } = useFavoritos();

  return (
    <div className="page">
      <h1>Tus países favoritos</h1>
      {favoritos.length === 0 ? (
        <p className="vacio-mensaje">
          Todavía no has agregado ningún país a favoritos. Ve a{' '}
          <a href="/">Inicio</a> y presiona "Agregar" en alguno.
        </p>
      ) : (
        <div className="country-grid">
          {favoritos.map((pais) => (
            <CountryCard key={pais.alpha3Code} pais={pais} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritosPage;