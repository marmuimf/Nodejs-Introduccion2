//JSON se define por {}

var entrada = {
    "nombre":"Mickey",
    "telefono":12345,
    "email":"mickeymouse@disney.com"
}
console.log(entrada)


//se puede combinar con array
var entrada = {
    "nombre":"Mickey",
    "telefono":12345,
    "email":[
        "mickeymouse@disney.com",
        "mickey@disney.com"
    ],
    
}
console.log(entrada)


//JSON dentro de array (importante para Mongo)

var agenda = [
    {
        "nombre":"Mickey",
        "telefono":12345,
        "email":[
            "mickeymouse@disney.com",
            "mickey@disney.com"
        ]
    },
    {
        "nombre":"Minnie",
        "telefono":12345,
        "email":[
            "minniemouse@disney.com",
            "minnie@disney.com"
        ]
    }
]
console.log(agenda)