/*
OPERADORES ARITMÉTICOS: nos sirven para hacer operaciones básicas
    + sirve para sumar o concatenar
    - sirve para restar números
    * sirve àra multiplicar 2 números
    % módulo nos sirve para obtener el residuo de una división. Se utiliza para saber si es un nmero par o no
    / división nos sirve para dividir 2 números
*/

const numero1 = parseInt(prompt("Ingresa el número 1"));
const numero2 = parseInt(prompt("Ingresa el número 2"));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log("Número 1: " + numero1);
console.log("Número 2: " + numero2);
console.log("El resultado de la suma es: " + suma);
console.log("El resultado de la resta es: " + resta);
console.log("El resultado de la multiplicación es: " + multiplicacion);
console.log("El resultado de la división de " + numero1 + " entre " + numero2 + " es: " + division);

console.log(5 % 3);

/*
OPERADORES LÓGICOS: Ayudan para comprobar condiciones. Si tengo operador A y operador B 

 And (&&). Para ser verdadero, ambos operadores deben ser verdadderos (v+v) de otra forma serán falso (v+f, f+v, f+f)
 Or (||). Para que sea verdadero, basta con que uno de los operadores sea verdadero (v+v, v+f, f+v)
 Not (!). Convierte un operador en lo contrario
*/