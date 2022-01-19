let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span");

/* addEventListener agrega un evento al elemento */
$btnMensaje.addEventListener("click", function() {
    console.log("No me presiones");
});

$mensaje.addEventListener("keyup", (e) => {
    // console.log("Escribiste algo");

    /* Con (e) puedo ver en consola lo que se que se ingresó en mi input*/ 
    // console.log(e);
     
    /* Con target.value puedo ver en consola cada letra que se fue ingresando en mi input*/ 
    console.log(e.target.value);

    if(e.target.value.length < 3) {
        $spanError.classList.remove("hide");
        $spanError.classList.add("error");
    } else {
        $spanError.classList.add("hide");
        $spanError.classList.remove("error");        
    }
});