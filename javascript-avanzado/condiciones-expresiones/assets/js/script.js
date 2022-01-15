/* Operadores Aritméticos */
// + - / * % ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores realcionales */
// <, >, <=, >=, ==, ===, !=, !==
// Dan como resultado un boolean: true o false

console.log(7 < 7); //FALSE: no estamos incluyendo el número a comparar
console.log(7 <= 7); //TRUE: incluimos el número a comparar

console.log(7 == "7"); //TRUE: Compara el valor
console.log(7 === "7"); //FALSE: Compara el valor y el tipo de dato

console.log(7 != "7"); //FALSE: Compara el valor
console.log(7 !== "7"); //TRUE: Compara el valor y el tipo de dato

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 7; //incremento = incremento + 7 = 12
console.log(incremento);

incremento -= 5; //incremento = incremento - 5 = 7
console.log(incremento);

incremento *= 5; //incremento = incremento * 5 = 35
console.log(incremento);

incremento /= 5; //incremento = incremento / 5 = 7
console.log(incremento);

/* Operador unario (incremento y decremento)*/
// ++, --
// sumar 1 o restar 1

let sumar = 0;
console.log(sumar + " línea 44");
sumar++;
console.log(sumar + " línea 46");
sumar++;
console.log(sumar); //2
sumar--;
sumar--;
sumar--;
console.log(sumar); //-1

/*
++variable = preincremento
variable++ = postincremento 
*/
let num = 5;
console.log(num++);
console.log(num);

/* Anidación de ciclos for: Ciclos dentro de ciclos*/
for(let i = 0; i < 3; i++) {
    console.log("Este es el ciclo padre");
    // Iteración: cuando un for termina un ciclo
    // Se realiza una primera iteración, se detiene y se realiza el for de adentro
    for(let j = 0; j < 5; j++) {
        console.log("Este es el ciclo hijo");
    }
}

