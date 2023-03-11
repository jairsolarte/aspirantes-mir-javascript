/*  El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina lacantidad de 
grasa de una persona. El BMI se calcula con la siguiente fórmula:
peso / altura^2.
En un archivo llamado IMC.js escribe una función llamada bmi
que reciba dos argumentos: peso y altura. 
Utiliza la formula para retornar el BMI correspondiente. Debes ejecutar tu archivo usando node.js
node IMC.js    */

function bmi(peso, altura) {
    return peso / altura ** 2
  }
  
  //código de prueba
  console.log("Tu IMC es: " + bmi(65, 1.8));
  console.log("Tu IMC es: " + bmi(72, 1.6));
  console.log("Tu IMC es: " + bmi(52, 1.75));
  