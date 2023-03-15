/* Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde seencuentra el mayor. 
Si el arreglo está vacío debe retornar -1. */
function maxIndex (arreglo1) {
    if (arreglo1.length === 0) {
        return -1;
    }
    numMayor = arreglo1[0];
    let indMayor = 0;
    for (let i=0; i<arreglo1.length; i++) {
        if (arreglo1[i] > numMayor) {
            numMayor = arreglo1[i];
            indMayor = i;
        }
    }
    return "Indice del numero mayor = "+indMayor;
}
console.log (maxIndex([1,3,2])); // 1
console.log (maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log (maxIndex([])); // -1
