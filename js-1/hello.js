/*  En un archivo llamado hello.js crear una función llamada hola que reciba un argumento (unacadena de texto)
y retorne “Hola ” seguido del argumento y un signo de exclamación, debes ejecutartu archivo usando node.js
node hello.js  */

//PRIMER SOLUCIÓN
function hello2(name) {
  console.log("Hola " + name +"!");
}

//código de prueba
hello2("Jair");
hello2("Ayrton");


//SEGUNDA SOLUCIÓN
function hello3(name) {
  return "Hola " + name + "!";
}

//código de prueba
console.log(hello3("Jair"));
console.log(hello3("Ayrton"));