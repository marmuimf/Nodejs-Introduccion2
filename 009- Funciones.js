//declaracion de funcion
function saluda1(){
    console.log("Me llamo Mickey Mouse");
    console.log("Tengo 90 años");
    console.log("Mi correo es mickeymouse@disney.com");
}

console.log("----Funcion Saluda1----");
saluda1(); //si no ponemos esto, no se ejecuta nada
console.log("----------------");
saluda1();



//funciones con parametros
//ventajas: codigo reutilizable y personalizado
function saluda2(nombre,edad,email){
    console.log("Me llamo "+nombre);
    console.log("Tengo "+edad+" años");
    console.log("Mi correo es "+email);
}
console.log("----Funcion Saluda2----");
saluda2("Mickey",90,"mickeymouse@disney.com");
console.log("----------------");
saluda2("Minnie",88,"minniemouse@disney.com");
console.log("----------------");
saluda2("Donald",83,"donaldduck@disney.com");
console.log("----------------");



//return (buenas practicas)
function saluda3(nombre,edad,email){
    cadena = "";
    cadena += "Me llamo "+nombre+".\n";
    cadena += "Tengo "+edad+" años\n"
    cadena += "Mi correo es "+email+"\n"
    return cadena;
}

console.log("----Funcion Saluda3----");
console.log(saluda3("Mickey",90,"mickeymouse@disney.com"));
console.log("----------------");
console.log(saluda3("Minnie",88,"minniemouse@disney.com"));
console.log("----------------");
console.log(saluda3("Donald",83,"donaldduck@disney.com"));