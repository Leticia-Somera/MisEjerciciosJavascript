//Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
let numeros = [2,4,6,8,10];
let suma = 0;

for(let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
 }

 let promedio = suma / numeros.length;
 
 document.write(`Los elementos del arreglo son: ${numeros} <br>` );
 document.write(`La suma de los elementos es: ${suma} <br>`);
 document.write(`El promedio de los elementos es: ${promedio} <br>`);