//Se coloca un $ al inicio de nombre de la variable para saber que estamos referenciando un id del DOM
// let $titulo = document.getElementById("titulo");
// console.log(titulo.textContent);

// // textContent sirve para acceder al contenido del texto
// titulo.textContent = "Título escrito desde javascript";

let $titulo = document.querySelector("#titulo");
titulo.textContent = "Título escrito desde javascript";

let $parrafo = document.querySelector("p");
//console.log($parrafo.textContent);


// Para acceder al segundo elemento del arreglo de párrafos <p>
let $parrafos = document.querySelectorAll("p");
//console.log($parrafos[1].textContent);

let subtitulo = document.createElement("h3");
subtitulo.textContent = "Este es un subtitulo desde javascript";

/*
$titulo hace referencia a dónde se colocará el nuevo elemento
insertAdjacentElement inserta lo que se encuentra dentro del paréntesis
("afterend", subtitulo); lo primero indica la posición donde se colocará el njuevo elemento
lo segundo indica cuál es ese nuevo elemento
*/
$titulo.insertAdjacentElement("afterend", subtitulo);

/* */
$titulo.remove();

/* 
con document, accedemos a nuestra página web
con document.body accedemos especificamente al <body> del HTML
el apend indica que lo colocará hasta el final del documento HTML 
*/
//document.body.append(subtitulo);

let $contenido = document.querySelector("#contenido");

/* De esta forma el <br> reemplaza el texto dentro del div id="contenido" */
//console.log($contenido.textContent = "<br>");

/* De esta forma el <br> se incorpora al HTML*/
//console.log($contenido.innerHTML = "<br>");

/*con outer se reemplaza todo el div por el texto "Hola" */
//console.log($contenido.outerHTML = "Hola");

let contenidoParrafo = document.createElement("p");
contenidoParrafo.textContent = "Contenido de mi nuevo párrafo";
/* appendChild hace que contenidoChild sea el hijo de contenido, colocándose hasta el final */
$contenido.appendChild(contenidoParrafo);

