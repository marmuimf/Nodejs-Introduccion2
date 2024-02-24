
//libreria matematica - REDONDEO
var nota = 4.6;
console.log(Math.round(nota))
console.log(Math.ceil(nota)) //redondea al alza
console.log(Math.floor(nota)) //redondea a la baja

//numeros aleatorios
var aleatorio = Math.random() //con decimales
console.log(aleatorio)

//funciones trigonometricas
var angulo = 0
console.log("coseno: "+Math.cos(angulo))
console.log("coseno: "+Math.sin(angulo))

angulo = Math.PI/2 //radianes
console.log("coseno: "+Math.cos(angulo))
console.log("coseno: "+Math.sin(angulo))


//FECHAS
var fecha = new Date()
console.log("El año es: "+fecha.getFullYear())
console.log("El mes es: "+(fecha.getMonth()+1))//empiezan en 0
console.log("El día es: "+fecha.getDate())
console.log("La hora es: "+fecha.getHours())
console.log("El minuto es: "+fecha.getMinutes())
console.log("El segundo es: "+fecha.getSeconds())