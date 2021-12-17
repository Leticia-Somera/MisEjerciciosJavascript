/*
EJERCICIO
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)

*/

function descuentoAplicado(){
    let compra = parseInt(prompt("Monto de la compra: "));
   
    if(compra < 100) {
        return compra * 0.90;
        
    } else if (compra >= 100 && compra < 200) {
        return compra * 0.80;

    } else {
        return compra * 0.70;
    }
}
const descuento = descuentoAplicado();
document.write("<h1>El precio final con el descuento aplicado es de: $"
 + descuento + ".00</h1>");