/*Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
*/

/* PARA ESCRINIR EN EL BODY:
    document.write("<h2>La multiplicación del elemento actual por 2 es: "
    + resultado[i] + "</h2>"); 
    document.write("<p>Los elementos actuales del arreglo 'resultados' son: "
    + resultado + "</p>"); 
*/

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];

for (let i = 0; i < numeros.length; i++){
    
    resultado [i] = numeros[i] * 2;
   
    console.log(resultado[i]);
    
}

console.log(resultado);