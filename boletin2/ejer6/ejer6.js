var alumno = {
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
    ADSO: "Raul",
    PROG: "Juan",
};

var asignaturas = {
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

if (isNaN(entrada)) {
    salida += "Tienes que introducir un numero de alumno";
}
if (alumno[entrada] == undefined) {
    salida += "El alumno no pertenece al centro";
} else {
    salida += "El alumno " + alumno[entrada] + " pertenece al centro\n";
    salida += "-------------------------------\n";
    salida += "HORARIO\n";

    for (var clave in horario) {
        salida += clave + "    | ";
        horario[clave].forEach((element) => {
            var pertenece = false;
            for (let i = 0; i < asignaturas[entrada].length; i++) {
                if (element == asignaturas[entrada][i]) {
                    pertenece = true;
                }
            }
            if (pertenece) {
                salida += element + "(" + modulos[element] + ")  |";
            } else {
                salida += " --- | ";
            }
        });
        salida += "\n";
    }
}
alert(salida);
