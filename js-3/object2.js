/*BONUS I: 1. En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las siguientes propiedades:
nombre, edad, ciudad y profesión.
2. Imprime en la consola el objeto "persona" completo.
3. Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
5. Imprime en la consola el valor de la variable "mensaje".
6. Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunospasatiempos.
7. Imprime en la consola la propiedad "hobbies" del objeto "persona".
8. Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies. */
let persona = {
    nombre: "Jair",
    edad: 50,
    ciudad: "Cali",
    profesión: "Ingeniero civil"
}
console.log(persona) //Imprime en la consola el objeto "persona" completo.
console.log("");

function presentacion(persona) { //Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto
    return "Mi nombre es " + persona.nombre + " tengo "+ persona.edad + " años y vivo en " + persona.ciudad;
}
let mensaje = presentacion(persona); //Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
console.log(mensaje); //Imprime en la consola el valor de la variable "mensaje"

console.log("");
persona.hobbies = ["Dios", "nadar", "programar", "tenis"]; //Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo
console.log(persona.hobbies); //Imprime en la consola la propiedad "hobbies" del objeto "persona"

console.log("");
for (let hobbie of persona.hobbies) {
    console.log (hobbie); //imprime la totalidad de los hobbies, separadas con sus propiedades.
}
