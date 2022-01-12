let title = document.getElementById("title");

/*console.log(title);
*/

function nuevoNombre() {
    let nombre = prompt("Coloca tu nombre");
    if (nombre != null) {
        document.getElementById("title");
        title.textContent = "Hola " + nombre; 
    }      
}