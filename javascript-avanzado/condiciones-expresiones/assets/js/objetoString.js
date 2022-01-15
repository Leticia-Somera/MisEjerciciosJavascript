// let cadena1 = "Hola";
// console.log(cadena1);

// /* 
// Con lo siguiente estamos creando un Objeto String
// Los Métodos son funciones asociadas a Objetos
// Las propiedades son atributos asociados al string
// */
// let cadena2 = new String("Adiós");
// console.log(cadena2);

// // El método includes() busca una cadena en otra y regresa TRUE o FALSE
// console.log(cadena2.toLowerCase().includes("a"));
// // Los siguientes muestran el elemento encontrado, ya sea en minúsculas o mayúsculas
// console.log(cadena2.toLowerCase());
// console.log(cadena2.toUpperCase());

// /* 
// Cohersión y conversión
// Cohersión en javascript convierte en automático un tipo de dato en otro
// */
// console.log(cadena1.toLowerCase());

// /* Función que recibe una palabra y la regresa invertida */
let palabra = "Hola mundo";
let arreglo = palabra.split("");
// //console.log(arreglo);
// //console.log(arreglo.reverse());

function invertirPalabra(cadena) {
    let arreglo = cadena.split(""); // Convirtiendo la cadena en un arreglo
    arreglo.reverse(); //Aquí se invierte el arreglo
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);    
}

invertirPalabra("Generation");