//Coleccion multidimensional
var agenda = []

agenda[0] = []
agenda[0][0] = "Mickey";
agenda[0][1] = "1234";
agenda[0][2] = "mickeymouse@disney.com";

agenda[1] = []
agenda[1][0] = "Minnie";
agenda[1][1] = "12345";
agenda[1][2] = "minniemouse@disney.com";

agenda[2] = []
agenda[2][0] = "Donald";
agenda[2][1] = "12345";
agenda[2][2] = "donaldduck@disney.com";

console.table(agenda)


//agenda mixta
var agenda = []

agenda[0] = []
agenda[0]['nombre'] = "Mickey";
agenda[0]['telefono'] = "1234";
agenda[0]['email'] = "mickeymouse@disney.com";

agenda[1] = []
agenda[1]['nombre'] = "Minnie";
agenda[1]['telefono'] = "12345";
agenda[1]['email'] = "minniemouse@disney.com";

agenda[2] = []
agenda[2]['nombre'] = "Donald";
agenda[2]['telefono'] = "12345";
agenda[2]['email'] = "minniemouse@disney.com";

console.table(agenda)