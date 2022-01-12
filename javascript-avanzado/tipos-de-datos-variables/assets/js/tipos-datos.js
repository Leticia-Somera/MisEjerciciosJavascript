let nombre = "Leticia Somera";
let edad = 32;
let tienesTrabajo = false;
let variableNull = null;
let variableUndefined;

console.log(typeof(nombre)); // String
console.log(typeof(edad)); // Number
console.log(typeof(tienesTrabajo)); // Boolean
console.log(typeof(variableNull)); // Null
console.log(typeof(variableUndefined)); // Undefined

/* === nos compara por tipos de datos */
console.log(variableNull === variableUndefined);

/* == compara solo datos */
console.log("1" == 1);

console.log(0 == false);

console.log(typeof(10 + 10)); //number

console.log(typeof("10" + true)); //string

console.log(typeof(parseInt("12335")));

let numero = 10;
console.log(numero);
/* para convertir números a string */
console.log(numero.toString());

