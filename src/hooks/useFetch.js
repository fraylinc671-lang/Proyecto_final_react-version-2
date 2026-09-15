import { useState, useEffect } from 'react';

// un customhook que recibe la url y devuelve datos, cargando o error, se reutiliza en cad apagina que necesite pedir datos a la api
function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // se dispara cuando el componente se monta y cada vez que la url cambie, basicamente para la ruta dinamica cuando cambia el pais cambia el :ID y la url cambia en automatico 
  useEffect(() => {
    
    if (!url) return;

    
    const controller = new AbortController();

    async function cargarDatos() {
      setCargando(true);
      setError(null);
      try {
        const respuesta = await fetch(url, { signal: controller.signal });
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: no se pudo obtener la información`);
        }
        const json = await respuesta.json();
        setDatos(json);
      } catch (err) {
        // Si el error es porque cancelamos nosotros mismos el fetch, suelta eso, ignoralo.
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setCargando(false);
      }
    }

    cargarDatos();


    return () => controller.abort();
  }, [url]);

  return { datos, cargando, error };
}

export default useFetch;
