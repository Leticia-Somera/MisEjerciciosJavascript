let $titulo = document.querySelector("#titulo");

/* Con lo siguiente agregamos in id que no existe en el HTML: */
let $texto = document.querySelector(".texto");
$texto.id = "texto";
// $texto.style = "color: red; fontsize: px";

/* Con lo siguiente agrego estilos desde etiquetas que yo creé en mi *.css
Puedo aplicar más de una etiqueta, como bg-purple y h3*/
$texto.className = "bg-purple h3";
//$texto.className = "h3";

$texto.classList.add("text-center");
$texto.classList.remove("bg-purple");