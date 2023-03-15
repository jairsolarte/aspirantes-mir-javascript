/* Crea una función max que reciba un arreglo de números y retorne el número máximo
sin usar el método Math.max de JavaScript. 
Si el arreglo está vacío debe retornar undefined */
function max(vector) {
    if (vector.length === 0) {
        return "undefined";
    }
    let numMayor = vector[0];
    for (let i=0; i<vector.length; i++) {
        if (vector[i] > numMayor) {
            numMayor = vector[i];
        }
    }
    return "El número mayor del arreglo es = "+numMayor;
}
console.log (max([1,3,2])); // 3
console.log (max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log (max([])); // undefined