/*
ARREGLOS
Es una colección de elementos
Tienen métodos o funciones que nos permiten ordenar o 
manipular los datos almacenados
Se utilizan para agrupar cosas
Es como tener separadores en la caja que 
contiene la información
*/

/*manera 1
const arreglo1 = [4, "Hola", true, [1, 2, 6]];
console.log(arreglo1);

//manera 2
const arreglo2 = Array.of(1, "Hola", true);
//console.log(arreglo2);

//manera 3
const arreglo3 = new Array(3, true, "adios");

console.log(arreglo3)
*/

const frutas = ["manzanas", 
"naranjas", "uvas", "sandías", [1, 2, 3, 4, 5, ["A", "B", "C"]]];
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][5]); //imprime el elemento número 4 y luego el elemento 5 dentro del arreglo de la pocisión 4
console.log(frutas[4][5][1]); 
console.log(frutas);
frutas[4][5].push("D");
console.log(frutas);

//Métodos
/*  length = longitud */
const letras = ["A", "B", "C", "D"];
console.log(letras.length); 

/* push = añade elemento al final de
nuestro arreglo*/
letras.push("E");
console.log(letras);

/* pop = elimina el último elemento 
que tengamos en nuestro arreglo*/
letras.pop();
console.log(letras);

/* unshift = agrega un elemento 
al inicio de nuestro arreglo*/
letras.unshift(5);
console.log(letras);

/* shift = elimina el primer elemento*/
letras.shift();
console.log(letras);