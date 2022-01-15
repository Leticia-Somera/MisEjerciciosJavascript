let numeros = [1,3,546,878,3,5,5,67,68,8,354,67,90,4];

/*numeros.forEach(function (elemento, indice) {
    document.write(elemento + "-" + indice + "<br>");
});
*/

/*numeros.forEach( elemento =>  {
    document.write(elemento + ", " );
});
*/

// Explicacion de map()
// numeros.forEach(function (elemento, indice) {
//     document.write(elemento + ", " );
// });

// let numeros2 = numeros.map(function(elemento) {
//     return elemento * 2;
// });

// document.write("<br>" + numeros2 + "<br>");

// document.write("<br>" + frutas + "<br>");
// document.write("<br>" + frutas2 + "<br>");

// frutas2.push("pera");
// document.write("<br>" + frutas + "<br>");
// document.write("<br>" + frutas2 + "<br>");

/* Includes */
// document.write("<br>" + numeros.includes("hola") + "<br>");

//let numerosPares = numeros.filter((elemento) => {
    // Una forma de clasificar si los números de mi arreglo son pares:
    // if(elemento % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    // Otra forma de clasificar si son números pares:
    // console.log(elemento % 2 == 0);
    // return elemento % 2 == 0;

    //Si el elemento es mayor que 10, se escribe en el documento:
//     if(elemento > 10) {
//         return true;
//     }
// });

//document.write("<br>" + numerosPares + "<br>");

//Para seleccionar los elementos que contengan ciertas letras
let frutas = ["Mango", "Uva", "piña", "mandarina", "manzana", "aguacate", "sandia"];

//let frutasFiltro = frutas.filter((fruta) => {
    //opción 1 para hacerlo:
    // if (fruta.includes("m") == true) {
    //     return true;
    // }

    //opción 2 para hacerlo:
    //return fruta.toLowerCase().includes("m");
//});

//document.write("<br>" + frutasFiltro + "<br>");

/* Sort ordena los elementos pero no es muy confiable porque los trata como string */
// let otrosNumeros = [9,6,2,5,4,9];
// document.write("<br>" + otrosNumeros.sort() +"<br>" );

/* Reverse invierte el orden de los elementos de un arreglo */
document.write("<br>" + numeros.reverse() + "<br>");

/* Find */
let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLowerCase().includes("mango");
});

document.write("<br>" + frutaEncontrada + "<br>");
