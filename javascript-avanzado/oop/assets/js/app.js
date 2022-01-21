/* Clases
Las clases (palabra reservada: class) son algo parecido a un "molde", que nos permite crear "objetos".
Vamos a definir a las clases con variables que inicien con letra mayúscula.
Los "constructores" describen las características del objeto. 
*/

class Animal{
    nombre = null;
    especie = null;
    
    constructor(nombre, especie) { /* constructor es una función */
        //console.log("Este es un constructor");
        
        this.nombre = nombre;
        this.especie = especie;
        /* La palabra reservada "this" hace referencia a una variable que se crea dentro de una función
        Esta variable contiene los datos que estaremos utilizando al invocar nuestro objeto */
        
        /* En la línea this.nombre = nombre;
        el primer "nombre" se refiere al atributo contenido en la class Animal (es abstracto o general) 
        y el segundo "nombre" se refiere al parámetro variable que yo puedo introducirle después a la función (como Scooby o Pecas) 
        */
    }

    /* Getters y Setters
    Son funciones especiales que tienen el propósito de leer(get) o modificar(set) al atributo
    get = obtener el valor de un atributo
    set = fijar o cambiar el valor de un atributo
    Van fuera del constructor pero dentro de la class
    Se invocan como si fueran atributos, no funciones
    */
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre =  nombre;
    }

    get getEspecie() {
        return this.especie;
    }

    set setEspecie(especie) {
        this.especie = especie;
    }

    presentarse() {
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    /* Cambiando un atributo mediante el uso del método cambiarNombre  */
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un  ${this.especie} <br>`;
        return mensaje;
    }

    /* Métodos estáticos 
    Pertenece solo a la clase y no se hereda a los objetos
    Es un método que se crea aunque no hayamos definido algún objeto como Animal1 o Animal2*/
    static saludar() {
        return console.log("Hola,soy un método estático");
    }
}

Animal.saludar();

/* Invocamos a la clase de forma similar a como invocamos una función: Animal() */
const Animal1 = new Animal("Scooby", "Perro");
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal1);

Animal1.presentarse();
Animal2.presentarse();

/* Cambiando un atributo con la notaciòn de punto */
console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre("Oddie");

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);