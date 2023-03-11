/*  En un archivo llamado sum.js escribe una función llamada suma que reciba un número positivo y
retorne la suma de todos los números desde 1 hasta ese número. Debes ejecutar tu archivo usando node.js
node sum.js   */

//Solución ejercio con fórmula matemática:  valor=n(n+1)/2

function suma(positivo){
    return positivo*(positivo+1)/2
}

//código de prueba
n=4
console.log("La suma de todos los numeros desde 1 hasta el " + n + " = "+ suma(n));

n=10
console.log("La suma de todos los numeros desde 1 hasta el " + n + " = "+ suma(n));

n=15
console.log("La suma de todos los numeros desde 1 hasta el " + n + " = "+ suma(n));