import { useState, useEffect } from 'react';


function useLocalStorage(clave, valorInicial) {

  const [valor, setValor] = useState(() => {
    try {
      const guardado = window.localStorage.getItem(clave);

      return guardado ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      
      console.error('Error leyendo localStorage:', error);
      return valorInicial;
    }
  });


  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error('Error guardando en localStorage:', error);
    }
  }, [clave, valor]);


  return [valor, setValor];
}

export default useLocalStorage;
