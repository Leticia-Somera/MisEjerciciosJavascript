/*
CONDICIONALES
if(confition){
    bloque
} else if (condition){
    bloque else if
} else {
    no lleva condition
    bloque else
}

FUNCIONES
Bloque de código reutilizable
function nombre(parámetros{
    return
}
nombre (argumentos);

*/

function procesadorDeFrutas(manzanas, naranjas){
    let jugo = "Jugo de " + manzanas + " manzanas y "
     + naranjas + " naranjas.";
     return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0,5);
console.log(jugoDeNaranja);