//los METODOS son funciones, dentro del objeto

class Persona{
    constructor(){
        this.edad = 0
        this.nombre = "";
    }
    saluda(){
        console.log("Hola, me llamo "+this.nombre+" y tengo "+this.edad+"años")
    }
}

var persona1 = new Persona();
persona1.edad = 90;
persona1.nombre = "Mickey";
console.log(persona1);
persona1.saluda();

//la info no esta protegida, la forma correcta es con setters y getters
