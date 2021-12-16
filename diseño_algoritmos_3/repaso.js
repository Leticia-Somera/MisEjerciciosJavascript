/*
ARREGLOS

*/

const comidas = ["Pozole", "Quesadilla", "Tacos"];
 /*
 length
 */

 console.log(comidas.length);

 /*
push: agrega elemento al final
pop: quita un elemnto al final 
unshift: agrega al inicio
shift: para eliminar un elemento al inicio
*/

comidas.push("Torta");
console.log(comidas);

comidas.unshift("Pancita");
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/*
forEach: nos puede ayudar a realizar una acció 
por cada elemento de nuesto arreglo de forma 
automática
*/

/*esta es la forma manual:
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);*/

comidas.forEach(function(el){
    console.log(el)
});

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
});

console.log(numeros);

//EJERCICIO
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);