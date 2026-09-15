import { NavLink } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

function Navbar() {
  const { favoritos } = useFavoritos();


  function claseActiva({ isActive }) {
    return isActive ? 'nav-link activo' : 'nav-link';
  }

  return (
    <nav className="navbar">
      <span className="navbar-brand">🌍 Buscador de Países</span>
      <div className="navbar-links">
        <NavLink to="/" className={claseActiva} end>
          Inicio
        </NavLink>
        <NavLink to="/favoritos" className={claseActiva}>
          Favoritos ({favoritos.length})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
