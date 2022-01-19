/* Ejercicio para crear tarjetas con diferentes imágenes */

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
.then(response => response.json()) //Conviertes los datos a objetos
.then(datos => {
    datos.forEach(elemento => {
        let titulo = elemento.title;
        let imagen = elemento.thumbnailUrl;
        let $cartas = document.querySelector("#cartas");
        let crearCarta = document.createElement("div");
        crearCarta.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
        </div>
      </div>`;
      $cartas.appendChild(crearCarta);        
    });
})
    