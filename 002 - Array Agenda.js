//ARRAYS o COLECCIONES DE DATOS

//el contenido de la variable va cambiando
var agenda = "Mickey";
console.log("La agenda es: "+agenda);
agenda = "Minnie";
console.log("La agenda es: "+agenda);


//para mantener el contenido - COLECCION/ARRAY
var agenda = [];
agenda[0] = "Mickey"
console.log(agenda);
agenda[1] = "Minnie";
console.log(agenda);
agenda[2] = "Donald";
console.log(agenda);
//los elementos se van añadiendo
//puedo añadir tantos como quiera

//TABLA
var agenda = [];
agenda[0] = "Mickey"
agenda[1] = "Minnie";
agenda[2] = "Donald";
console.table(agenda);
agenda.push("Pluto");//push si no se que posicion es la siguiente (indice)
console.table(agenda);
agenda.pop();//pop quita el ultimo elemento de la agencia
console.table(agenda);
agenda.splice(0,1); //quita elementos de la tabla: indice,nr elementos que quiero quitar
console.table(agenda);//los indices se mueven


//Coleccion alfanumerica
//los indices, en vez de ser nr son elementos alfanumericos

agenda = [];
agenda['nombre'] = "Mickey";
agenda['telefono'] = "12345";
agenda['email'] = "mickeymouse@disney.com";

console.table(agenda)

//no seria tan facil hacer un splice o push
