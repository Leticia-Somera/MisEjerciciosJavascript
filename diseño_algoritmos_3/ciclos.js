/*
CICLOS - BUCLES - LOOPS
while: Permite que hagamos una tarea repetitiva
la cantidad de veces que queramos. Su estructura es:

While

let condicion = 1; - valor inicial
while (condicion){
    tu código
}
*/

/*EJEMPLO: Imprimir los números del 1 al 10

let condicion = 1;
while (condicion <= 10){
    console.log(condicion);
    condicion = condicion + 1;
}
*/

/*
EJEMPLO DE ++ Y --
let numero =1;
numero++; //2
numero++; //3
numero++; //4
numero--; //3
numero--; //2
numero--; //1
console.log(numero);
*/

/*
MISMO EJEMPLO WHILE PERO AHORA CON ++

let condicion = 1;
while (condicion <= 10){
    console.log(condicion);
    condicion++;
}
*/

/*DO
EJEMPLO: Imprimir los números del 1 al 10
A diferencia de While, con Do while "pega y luego pregunta", 
es decir, primero ejecuta y luego comprueba la condición

let numero = 1;
do{
    console.log(numero);
    numero++;
    
} while (numero <= 10);
*/

/*
FOR

for (let control = 1; control <= 10; control++){
    console.log(control);
}
*/

/* EJEMPLO para escribir 5 veces el array comidas
const comidas = ["Pozole", "Tacos", "Tamales", "Tortas"];

for (let i = 0; i <= comidas.length; i++){
    console.log(comidas);
}
*/

/* EJEMPLO para escribir 5 veces el array comidas
const comidas = ["Pozole", "Tacos", "Tamales", "Tortas"];

for (let i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
}
*/