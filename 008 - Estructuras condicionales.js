//ESTRUCURAS CONDICIONALES


//if 
var edad = 45
if(edad < 30){
    console.log("Eres un joven");
}

//else
if(edad < 30){
    console.log("Eres un joven");
}else{
    console.log("Ya no eres tan joven");
}

//else if
var diadelasemana = "pepino"

if(diadelasemana == "lunes"){
    console.log("Hoy es el peor día de la semana");
}else if(diadelasemana == "martes"){
    console.log("Hoy es el segundo peor día de la semana");
}else if(diadelasemana == "miercoles"){
    console.log("Ya estamos a mitad de semana");
}else if(diadelasemana == "jueves"){
    console.log("Mañana ya es viernes");
}else if(diadelasemana == "viernes"){
    console.log("Por fin es viernes");
}else if(diadelasemana == "sabado"){
    console.log("El mejor día de la semana");
}else if(diadelasemana == "domingo"){
    console.log("Parece mentura que mañana ya sea lunes");
}else{
    console.log("No se que has escrito, pero no es un dia");
}



//switch
var diadelasemana = "lunes"
switch(diadelasemana){
case "lunes":
    console.log("Hoy es el peor día de la semana");
    break;
case "martes":
    console.log("Hoy es el segundo peor día de la semana");
    break;
case "miercoles":
    console.log("Ya estamos a mitad de semana");
    break;
case "jueves":
    console.log("Mañana ya es viernes");
    break;
case "viernes":
    console.log("Por fin es viernes");
    break;
case "sabado":
    console.log("El mejor día de la semana");
    break;
case "domingo":
    console.log("Parece mentura que mañana ya sea lunes");
    break;
default:
    console.log("No sé qué has escrito, pero no es un día");
}