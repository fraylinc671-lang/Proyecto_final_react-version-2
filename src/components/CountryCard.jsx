import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { formatearNumero } from '../utils/format';

// Componente de presentación que recibe un objeto en este caso pais, completo por props
// y solo se encarga de mostrarlo. no tiene usestate ni logica a exepcion del boton de favoritos

function CountryCard({ pais }) {
  return (
    <div className="country-card">
      <Link to={`/pais/${pais.alpha3Code}`} className="country-card-link">
        <img src={pais.flags?.svg} alt={`Bandera de ${pais.name}`} />
        <h3>{pais.name}</h3>
        <p>Región: {pais.region}</p>
        <p>Población: {formatearNumero(pais.population)}</p>
      </Link>
      <FavoriteButton pais={pais} />
    </div>
  );
}

export default CountryCard;