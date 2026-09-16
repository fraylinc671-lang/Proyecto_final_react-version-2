

//una simple funcion para convertir 44938712 en "44,938,712" para leer mas facil la poblacion, la coloque en utils ya que no es un componente ni tampoco un hook, solo una funcion adicional
export function formatearNumero(numero) {
  if (typeof numero !== 'number') return numero;
  return numero.toLocaleString('es-DO');
}
