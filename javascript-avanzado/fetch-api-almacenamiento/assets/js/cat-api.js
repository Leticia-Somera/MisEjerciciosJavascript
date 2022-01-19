let $btnGato = document.querySelector("#btnGato");

$btnGato.addEventListener("click", () => {

    /* Para la API de gatitos:*/
    fetch("https://api.thecatapi.com/v1/images/search")  //Se hace la petición al servidor con esta dirección
    .then(
        resp => resp.json()
        /* lo mismo pero usando function: */
        //function (resp) {return resp.json();}
        )
    .then(data => {
        console.log(data);

        let imagenGatito = document.createElement("img"); //creamos etiqueta img
        imagenGatito.src = data[0].url; // le doy valor al src
        document.body.appendChild(imagenGatito); // se imprime en el body del documento
    }) //Este segundo then es para procesar el json

    /*  Para la API de perritos:*/
    fetch("https://dog.ceo/api/breeds/image/random")  //Se hace la petición al servidor con esta dirección
    .then(
        resp => resp.json()
        /* lo mismo pero usando function: */
        //function (resp) {return resp.json();}
        )
    .then(data => {
        console.log(data);

        let imagenGatito = document.createElement("img"); //creamos etiqueta img
        imagenGatito.src = data.message; // le doy valor al src
        document.body.appendChild(imagenGatito); // se imprime en el body del documento
    }) //Este segundo then es para procesar el json
});