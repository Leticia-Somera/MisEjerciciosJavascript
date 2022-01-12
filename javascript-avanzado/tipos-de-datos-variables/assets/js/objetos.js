/*let miObjeto = {
    // pares de clave y valor, como sigue
    nombre: "Leticia Somera"
};

/* llaves es objeto
corchetes es arreglo */
let persona = {
    nombre: {
        apellidoPaterno: "Somera",
        apellidoMaterno: "León",
        primerNombre: "leticia"
    },
    edad: 32,
    direccion:  {
        ciudad: "BJ", 
        estado: "CDMX"
        },
    numero: [
        7225577860,
        7222131390
    ]
};

//console.log(persona);
console.log(persona.nombre.apellidoPaterno);
/* numero[0];
direccion.ciudad; */

let menu = {
    platoFuerte: {
        enchi1: "enchiladas rojas",
        enchi2: "enchiladas verdes",
        taco: "tacos al pastor",
        tamal: ["tamal rojo", "tamal verde", "tamal oaxaqueño"]
    },
    postre: {
        arroz: "arroz con leche",
        fresas: "fresas con crema",
        helado: {
            hel1: "helado fresa",
            hel2: "helado vainilla",
            hel3: "helado chocolate"
        }
    }
}

console.log(menu.platoFuerte.tamal[1]);