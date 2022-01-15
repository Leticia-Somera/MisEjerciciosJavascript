// let palabra = document.getElementById("miPalabra").value ;
// let arreglo = palabra.split("");

function invertirPalabra(cadena) {
    let palabra = document.getElementById("miPalabra").value ;
    console.log(palabra);
    // let arreglo = palabra.split("");
    // console.log(arreglo);
   // let arreglo = cadena.split(""); // Convirtiendo la cadena en un arreglo
    arreglo.reverse(); //Aquí se invierte el arreglo
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);
    
}

invertirPalabra(document.getElementById("miPalabra").value );
document.getElementById("palInvertida").innerHTML = invertirPalabra();