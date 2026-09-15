import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Aqui creamos un tipo de canal de contexto para que cualquier componente envuelto por el provider acceda a lo que coloquemos.
const FavoritosContext = createContext();


export function FavoritosProvider({ children }) {
  // usamos el un customhook propio para que la lista  de fav viva en memoria
  // (useState) pero tambien se guarda sola en localStorage.
  const [favoritos, setFavoritos] = useLocalStorage('favoritos-paises', []);

  // agrega el pais a fav si no esta.
  function agregarFavorito(pais) {
    setFavoritos((prev) => {
      const yaExiste = prev.some((p) => p.alpha3Code === pais.alpha3Code);
      if (yaExiste) return prev;
      return [...prev, pais];
    });
  }

  // Quita el pais de fav.
  // filter que pedia el mandato.
  function quitarFavorito(codigo) {
    setFavoritos((prev) => prev.filter((p) => p.alpha3Code !== codigo));
  }

  // para saber si un pais ya esta en fav.
  function esFavorito(codigo) {
    return favoritos.some((p) => p.alpha3Code === codigo);
  }

  
  const value = { favoritos, agregarFavorito, quitarFavorito, esFavorito };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const contexto = useContext(FavoritosContext);
  if (!contexto) {
    throw new Error('useFavoritos debe usarse dentro de un FavoritosProvider');
  }
  return contexto;
}