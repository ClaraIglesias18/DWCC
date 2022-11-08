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
    this.establecerDelegado = function(delegado) {
        if (!alumnos.includes(delegado)) {
            alert("No hay ningun alumno en la lista con ese nombre"); 
        } else {
            this.delegado = delegado;
        }
    };
    this.establecerSubDelegado = function(subdelegado) {
        if (!alumnos.includes(subdelegado)) {
            alert("No hay ningun alumno en la lista con ese nombre");
        } else if (this.delegado == subdelegado) {
            alert("El subdelegado no puede ser delegado");
        } else {
            this.subdelegado = subdelegado;
        }
    };
    this.delegado = this.establecerDelegado(delegado);
    this.subdelegado = this.establecerSubDelegado(subdelegado);
    this.añadirAlumno = function(alumno) {
        this.alumnos.push(alumno);
    };
    this.eliminarAlumno = function(alumno) {
        this.alumno.pop(alumno);
    };
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
grupo1.añadirAlumno("añadido");
