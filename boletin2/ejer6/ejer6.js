var alumnos = {
    101: "Pepe",
    102: "Juan",
    103: "Clara",
    104: "Maria",
    105: "Carlos",
    106: "Raul",
};

var modulos = {
    DAW: "Julio",
    DIW: "Jose Maria",
    DWCS: "Luis",
    DWCC: "Bea",
    EIE: "Marta",
    SERI: "Julio",
    ADSO: "Julio",
    PROG: "Julio",
};

var alumnos = {
    101: ["DAW", "DIW", "EIE"],
    102: ["ADSO", "PROG", "DWCC"],
    103: ["DIW", "SERI"],
    104: ["DWCS", "PROG", "DIW"],
    105: ["ADSO", "DIW"],
    106: ["PROG", "SERI"],
};

var horario = {
    primera: ["DAW", "DAW", "EIE"],
    segunda: ["DAW", "DIW", "DWCC"],
    tercera: ["ADSO", "PROG", "PROG"],
    cuarta: ["SERI", "PROG", "DWCS"],
    quinta: ["SERI", "DIW", "DWCS"],
    sexta: ["EIE", "DWCC", "DWCC"],
};

var salida = "";
var entrada = prompt("Indica el alumno del que quieres saber informacion: ");

if(isNaN(entrada)) {
    salida += "Tienes que introducir un numero no texto"
} if(!(alumnos.includes(entrada))){
    salida += "El alumno no pertence al centro"
} else {
    //crear un array bidimensional con las posiciones de las asiganturas
    //en el array de horario

    
}
