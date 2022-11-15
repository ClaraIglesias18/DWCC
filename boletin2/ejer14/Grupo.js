function establecerDelegado(delegado) {
    if (!alumnos.includes(delegado)) {
        alert("No hay ningun alumno en la lista con ese nombre"); 
    } else {
        return delegado;
    }
}

function establecerSubDelegado(subdelegado) {
    if (!alumnos.includes(subdelegado)) {
        alert("No hay ningun alumno en la lista con ese nombre");
    } else if (this.delegado == subdelegado) {
        alert("El subdelegado no puede ser delegado");
    } else {
        return subdelegado;
    }
}

function validarAlumno(alumno) {
    if(!alumnos.includes(alumno)) {
        return false;
    } else {
        return true;
    }
}

function validarSubdelegado(subdelegado) {
    if(this.delegado == subdelegado) {
        return false;
    } else {
        return true;
    }
}

function añadirAlumno(alumno) {
    this.alumno.push(alumno);
}

function eliminarAlumno(alummo) {
    this.alummo.pop(alummo);
}

function Grupo(nombre, tutor, delegado, subdelegado) {
    this.nombre = nombre;
    this.alumnos = alumnos = [
        "clara",
        "roberto",
        "trond",
        "jorge",
        "martin",
        "sergio",
        "jose",
        "alejandro",
    ];
    this.tutor = tutor; 
    this.delegado = establecerDelegado;
    this.subdelegado = establecerSubDelegado(subdelegado);
    this.toString = function() {
        return (
            this.nombre +
            " , " +
            this.tutor +
            " , " +
            this.delegado +
            " , " +
            this.subdelegado
        );
    };
}


var salida =
    "Programa gestion grupos de clase" + "\n-------------------------------";
var nombre = prompt("Indica el nobre de grupo: ");
var tutor = prompt("Indica el nombre del tutor: ");
var delegado = prompt("Indica el nombre del delegado: ");
var subdelegado = prompt("Indica el nombre del subdelegado: ");

var grupo1 = new Grupo(nombre, tutor, delegado, subdelegado);
alert(grupo1.toString());
