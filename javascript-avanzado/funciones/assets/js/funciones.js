/* Funcion
Es un bloque de código reutilizable
Puede o no tener parámetros de entrada
Puede devolver o no un valor
Se declara la función y no importa si las variables se obtienen después o si se invoca la función al inicio o al final
*/

function suma(numero1, numero2,) {
    // Operaciones o código a ejecutar
    //return 
    return numero1 + numero2;
    console.log("Hola desde la función");
}

function restar(numero1, numero2) {
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
}

let numero1 = parseInt(prompt("Número 1"));
let numero2 = parseInt(prompt("Número 2"));
let sumaNumeros = suma(numero1, numero2);

// Template string: representa la cadena
// Se usa con las comillas `  para evitar estar abriendo y cerrando comillas dobles
document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);
restar(numero1,numero2);
document.write("La suma de " + numero1 + " y " + numero2 + " es " + sumaNumeros);