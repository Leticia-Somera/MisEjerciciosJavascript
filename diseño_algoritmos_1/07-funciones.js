/*
FUNCIONES
Nos sirven para escribir bloques de código que
se puede reutilizar (por ejemplo que sea repetitivo)

Por ejemplo, en lugar de escribir el siguiente código:
let numero1 = 10;
let numero2 = 20;
let suma1 = numero1 + numero2;
document.write('<h1>'+ suma1 + '</h1>')

let numero3 = 11;
let numero4 = 22;
let suma2 = numero3 + numero4;
document.write('<h1>'+ suma2 + '</h1>')

Puedo escribir en su lugar una función, cuya estructura es:
Palabra reservada seguida de nombre de la función
seguida de paréntesis y luego corchetes: function sumar () {}


function sumar () {
    let numero1 = 10;
    let numero2 = 20;
    let suma1 = numero1 + numero2;
    document.write('<h1>'+ suma1 + '</h1>')
};

sumar();

// Puedo hacer la función más general de la siguiente forma
*/

function sumar (numero1, numero2) {
    let suma1 = numero1 + numero2;
    document.write('<h1>'+ suma1 + '</h1>')
};

sumar(12, 2);
sumar(140, 4);
sumar(100, 50);
