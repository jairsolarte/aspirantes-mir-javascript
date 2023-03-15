/* Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio
sin usar el método join de los arreglos.  */
function join(vectorPalabras) {
    let frase = vectorPalabras[0];
    for (let i=1; i<vectorPalabras.length; i++) {
        frase = frase+" "+vectorPalabras[i];
    }
    console.log(typeof(frase));//Nos indica el tipo de variable que es frase
    return frase;
}
console.log (join(["Jair","vamos","aprendiendo","cada","día"])); // Jair vamos aprendiendo cada día