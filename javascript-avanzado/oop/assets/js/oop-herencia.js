class Pokemon{
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //Métodos
    atacar() {
        return console.log(`${this.nombre} está atacando.`);
    }
}

/* Para enlazar clases se usa la siguiente sintaxis */
class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo); // la alabra reservada super me manda al constructor de la clase padre
        this.edad = edad;
    }

    evolucionar() {
        return console.log(`${this.nombre} está evolucionando.`);
    }
}

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad, color);
        this.color = color;
    }
}


const Electrico1 = new Electrico("Panchito", "Eléctrico", 4, "Gris");

const Pikachu1 = new Pikachu("Juan", "Eléctrico", 3);
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon("Charmander", "Fuego");
Pokemon1.atacar();
//Pokemon1.evolucionar(); //Esto no funcionará porque el método evolucionar es propio de la clase pikachu solamente