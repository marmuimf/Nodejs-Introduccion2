
//CREAR OBJETO (se parecen a las funciones pero no llevan parametros)
class Persona{
    constructor(){ //se ejecuta automaticamente cuando el objeto nace
        this.edad = 90 //propiedad
        this.nombre = "Mickey";
    }
}

//con todo lo anterior no se ejecuta nada

//creo una instancia persona1 que recibe todo lo que tenga Persona
var persona1 = new Persona();
console.log(persona1)


