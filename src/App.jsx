import { Routes, Route } from 'react-router-dom';
import { FavoritosProvider } from './context/FavoritosContext';
import Navbar from './components/Navbar';
import InicioPage from './pages/InicioPage';
import DetallePage from './pages/DetallePage';
import FavoritosPage from './pages/FavoritosPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    // FavoritosProvider envuelve TODA la app, así que cualquier componente,
    // en cualquier página, puede usar useFavoritos() sin importar props.
    <FavoritosProvider>
      <Navbar />
      <main>
        {/* Routes decide CUÁL Route coincide con la URL actual y renderiza
            solo ese componente, sin recargar la página. */}
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          {/* :codigo es el parámetro dinámico — ruta obligatoria de la rúbrica */}
          <Route path="/pais/:codigo" element={<DetallePage />} />
          {/* path="*" atrapa CUALQUIER url que no coincidió arriba */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </FavoritosProvider>
  );
}

export default App;
