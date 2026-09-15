import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import FavoriteButton from '../components/FavoriteButton';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { formatearNumero } from '../utils/format';

function DetallePage() {
  const { codigo } = useParams();

  const url = `https://www.apicountries.com/alpha/${codigo}`;
  // Primero tenia una api que devolvia un array, pero esa api por alguna razon no funciono luego de intentar de todo asi que coloque esta que devuelve un objeto
  const { datos: pais, cargando, error } = useFetch(url);

  if (cargando) return <Loader />;
  if (error) return <ErrorMessage mensaje={error} />;
  if (!pais) return <ErrorMessage mensaje="País no encontrado" />;

  return (
    <div className="page">
      <Link to="/" className="volver-link">← Volver a la lista</Link>
      <div className="detalle-pais">
        <img src={pais.flags?.svg} alt={`Bandera de ${pais.name}`} />
        <div className="detalle-info">
          <h1>{pais.name}</h1>
          <p><strong>Capital:</strong> {pais.capital || 'N/A'}</p>
          <p><strong>Región:</strong> {pais.region} ({pais.subregion})</p>
          <p><strong>Población:</strong> {formatearNumero(pais.population)}</p>
          <p><strong>Área:</strong> {formatearNumero(pais.area)} km²</p>
          <FavoriteButton pais={pais} />
        </div>
      </div>
    </div>
  );
}

export default DetallePage;