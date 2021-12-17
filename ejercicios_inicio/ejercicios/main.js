// alert("Hola mundo!!"); comentario de una línea
/*para comentarios de múltiples líneas */
/* alert("Hola mundo!!") */

// Valores primitivos de variables:
// 1. STRING es variable de cadena de texto
let miNombre = "Leticia €€";
console.log(miNombre);

/* 2. NUMBER
10
10.0
-50
*/

let numero1 = 10;
let numero2 = 10.05;
let numero3 = -50;

console.log(numero1, numero2, numero3);
console.log("El valor de numero1 es: " + numero1)
console.log("El valor de numero2 es: " + numero2)
console.log("El valor de numero3 es: " + numero3)

/* 3. BOOLEAN
true = verdadero
false = falso
*/

let miBoolean1 = true; 
let miBoolean2 = false;

console.log("El valor de numero la variable 1 es: " + miBoolean1)
console.log("El valor de numero la variable 2 es: " + miBoolean2)

/* 4. NULL
indica que la variable está vacía INTENCIONALMENTE
*/

let variableVacia = null;

console.log(variableVacia);

/* 5. UNDEFINED
nos indica que una variable está vacía porque lo queremos o porque
iniciamos una variable sin valor ESTO NO ES INTENCIONAL
*/

let variable; 
console.log(variable);


variable = "hola";
console.log(variable);