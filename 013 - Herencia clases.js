class Animal{
    constructor(){
    }
    respira(){
        return "El raton está respirando.";
    }
}

// con EXTENDS, Persona hereda todo lo de Animal
class Persona extends Animal{
    constructor(){
        super();
        this.edad = 0
        this.nombre = "";
    }
    setEdad(nuevaedad){
        this.edad = nuevaedad
    }
    getEdad(){
        return this.edad
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre
    }
    getNombre(){
        return this.nombre
    }
    saluda(){
        return "Hola, me llamo "+this.nombre+" y tengo "+this.edad
    }
}

var persona1 = new Persona();
persona1.setEdad( 90 );
persona1.setNombre("Mickey");
console.log(persona1);
console.log(persona1.saluda());
console.log(persona1.respira())