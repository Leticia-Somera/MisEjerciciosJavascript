// Escribir un documento html el cual debe contener un input y un botón.
// Escribir un programa en donde se defina un número secreto.
// Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

// Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
// Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
// Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
// Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
// Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
// Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado

// let numeroPropuesto = 10;
// let numeroUsuario = document.getElementById("num");

// function adivinar() {
       
//     let numero = parseInt(numeroUsuario.value);
//     let resta = Math.abs(numero - numeroPropuesto);
//     if(numero > 100) {
//         document.getElementById("respuesta").innerHTML = `Número no válido`;       
//     } else if(suma == 0) {
//         document.getElementById("respuesta").innerHTML=`Felicidades, adivinaste el número secreto`;
//     } else if(suma <= 5) {
//         document.getElementById("respuesta").innerHTML=`Calienteeeeeeee`;
//     } else if(suma <= 10) {
//         document.getElementById("respuesta").innerHTML=`Caliente`;
//     } else if(suma <= 20) {
//         document.getElementById("respuesta").innerHTML=`Tibio`;
//     } else if(suma <= 30) {
//         document.getElementById("respuesta").innerHTML=`Frio`;
//     } else {
//         document.getElementById("respuesta").innerHTML=`Congelado`;
//     }
// }


function random (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
    //Math.random Entrega un número aleatorio entre 0 y 1
    //Mat.floor Entrega el número entero más cercano
}
let numeroPropuesto =random (20, 40);
console.log(numeroPropuesto);

function adivinar () {
    let numeroUsuario = document.getElementById('num');
    let numero = parseInt(numeroUsuario.value);
    console.log(numero);
    let diferencia = Math.abs(numero - numeroPropuesto);
    if (numero == numeroPropuesto) {
        document.getElementById('resultado').innerHTML = `Felicidades, adivinaste el numero secreto`;
    } else if (diferencia <= 5) {
        document.getElementById('resultado').innerHTML = `Calienteeeeee`;
    } else if (diferencia <= 10) {
        document.getElementById('resultado').innerHTML = `Caliente`;
    } else if (diferencia <= 20) {
        document.getElementById('resultado').innerHTML = `Tibio`;
    } else if (diferencia <= 30) {
        document.getElementById('resultado').innerHTML = `Frio`;
    } else if (diferencia >= 30) {
        document.getElementById('resultado').innerHTML = `Congelado`;
    }
}

