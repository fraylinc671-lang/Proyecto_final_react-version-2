import { useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const API_URL = 'https://countries.dev/countries';

function InicioPage() {
  // Usefetch que se dispara una vez al montar la web 

  const { datos: paises, cargando, error } = useFetch(API_URL);
  const [busqueda, setBusqueda] = useState('');

  const paisesFiltrados = useMemo(() => {
    if (!paises) return [];
    return paises.filter((pais) =>
      pais.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [paises, busqueda]);

  return (
    <div className="page">
      <h1>Explora países del mundo</h1>
      <SearchBar valor={busqueda} onBuscar={setBusqueda} />
      {cargando && <Loader />}
      {error && <ErrorMessage mensaje={error} />}
      {!cargando && !error && (
        <>
          <p className="resultado-contador">
            {paisesFiltrados.length} país(es) encontrados
          </p>
          <div className="country-grid">
            {paisesFiltrados.map((pais) => (
              <CountryCard key={pais.alpha3Code} pais={pais} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default InicioPage;
