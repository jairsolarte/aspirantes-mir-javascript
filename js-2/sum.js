// Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:
function sum(arreglo) {
  let suma=0;
  for (let i=0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return "La suma de los componentes del arreglo = "+suma;
}
console.log (sum([1,2,3]));  // 6
console.log (sum([10,8,12,5]));  // 35
console.log (sum([]));  // 0