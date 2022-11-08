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

function matriculado(alumno, modulo) {
    let salida;
    if(asignaturas[alumno].includes(modulo)) {
        salida = "El alumno " + alumno + " esta matriculado en " + modulo;
    } else {
        salida =  "El allumno " + alumno + " no esta matriculado en " + modulo;
    }

    return salida;
}

function diaClase(alumno, dia) {
    let salida;
    let clase = false;
    for (const clave in horario) {
        if(alumno.includes(horario[clave][dia])) {
            clase = true;
        }
    }

    if(clase) {
        salida = "Tiene clase";
    } else {
        salida = "No tiene clase";
    }

    return salida;
}

function numeroAlumnos(asignatura) {
    let cont = 0;
    
    for (const clave in asignaturas) {
        if(asignaturas[clave].includes(asignatura)) {
            cont++;
        }
    }

    return "Hay un total de " + cont + "alumno/s en esa asignatura";
}

alert(salida);

var alumno = prompt("Dime el alumno que quieras saber si esta matriculado: ");
var modulo = prompt("Dime el modulo en el que quieras buscar: ");

alert(matriculado(alumno, modulo));

var alummo = prompt("dime el alumno que quieras saber informacion: ");
var dia = prompt("Indica el dia: ");

alert(diaClase(alummo, dia));

var asignatura = prompt("Indica la asignatura para contar el numero de alumnos: ");

alert(numeroAlumnos(asignatura));
