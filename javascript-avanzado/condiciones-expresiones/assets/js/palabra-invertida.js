let palabra = "Hola";
let arreglo = palabra.split("");
let palabraUsuario = prompt("Introduce una palabra");

function invertirPalabra(cadena) {   
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");
    return document.getElementById("resultado").innerHTML = cadenaInvertida;     
}

invertirPalabra(palabraUsuario);