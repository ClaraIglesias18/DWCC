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
    DIW: "Jose",
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
    primera: new Array("DAW", "DAW", "EIE"),
    segunda: new Array("DAW", "DIW", "DWCC"),
    tercera: new Array("ADSO", "PROG", "PROG"),
    cuarta: new Array("SERI", "PROG", "DWCS"),
    quinta:new Array("SERI", "DIW", "DWCS"),
    sexta: new Array("EIE", "DWCC", "DWCC")
};
var salida = "";
var entrada = prompt("Indica el alumno del que quieres saber informacion: ");

if (isNaN(entrada)) {
    salida += "Tienes que introducir un numero de alumno";
} else if(alumno[entrada] == undefined) {
    salida += "El alummo no pertenece al centro";
} else {
    salida += "El alumno " + alumno[entrada] + " pertenece al centro\n";
    salida += "-------------------------------\n";
    salida += "HORARIO\n";

    for (var clave in horario) {
        salida += clave + "    | ";

        horario[clave].forEach((element) => {

            if (asignaturas[entrada].includes(element)) {
                salida += element + "(" + modulos[element] + ")  |";
            } else {
                salida += " ----------- | ";
            }
        });
        salida += "\n";
    }
}
alert(salida);
