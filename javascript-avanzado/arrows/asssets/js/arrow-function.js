/* Arrow function
Función de flecha 
Estas si deben estar declaradas antes de utilizarlas: Primero se declara la función y luego las variables. Se invoca hasta el final
*/

const suma = (numero1, numero2) => {
    return numero1 + numero2
}

let numero1 = parseInt(prompt("Número 1"));
let numero2 = parseInt(prompt("Número 2"));
let sumaNumeros = suma(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);
