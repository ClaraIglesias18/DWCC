//declaracion de array con los meses del año y su numero como valor
var meses = {
    "ene" : "1",
    "feb" : "2",
    "mar" : "3",
    "abr" : "4",
    "may" : "5",
    "jun" : "6",
    "jul" : "7",
    "ago" : "8",
    "sep" : "9",
    "oct" : "10",
    "nov" : "11",
    "dic" : "12"
};

var personas = [
    ["Clara Iglesias Vazquez", "45164991Y", "1999,dic,24", true],
    ["Pepe Rodriguez Rodriguez", "95476335M", "1983,ene,12", false],
    ["Pepita Gonzalez Gonzalez", "89756174L", "2001,abr,04", true],
];

var equipos = [];

class Equipo {
    constructor(nombre, capitan, jugadores = []) {
        this.nombre = nombre;
        this.capitan = capitan;
        this.jugadores = jugadores;
    }

    calculaMediaEdad() {

        var media;

        

        return media;
        
    }

    añadeJugador() {
        var numAl = Math.floor(Math.random(personas.length));

        this.jugadores.push(personas[numAl]);
        personas.splice(numAl,1);

    }
}

var entrada = prompt("Introduzca datos de un jugador: (Para finalizar escriba '*')"); 

while (entrada != "*") {
    
    var repetido = false;
    var cont = 0;
    var datos = entrada.split(",");
    var dni = datos[1];
    var dniSinSeparacion = dni.trim();
    var expresionDni = /^\d{8}[a-zA-Z]$/;

    if(expresionDni.test(dniSinSeparacion)) {
        
        while(cont < personas.length && !repetido) {

            if(personas[cont][1] == dniSinSeparacion) {
                repetido = true;
            }
            cont++; 
        }

        if(repetido) {
            alert("El DNI introducido ya esta repetido");
        } else {
            var nombre = datos[0].trim();
            var fecha = datos[2].trim();
            
            if(datos.length == 4) {
                var capitan = true;
            } else {
                var capitan = false;
            }

            var persona = [nombre, dniSinSeparacion, fecha, capitan];

            personas.push(persona);

        }

    } else {
        alert("El DNI introducido tiene un formato incorrecto");
    }

    entrada = prompt("Introduzca datos de un jugador: (Para finalizar escriba '*')");

}

personas.forEach(element => {
    if(element[3] == true) {
        entrada = prompt("Introduce el nombre del equipo cuyo capitan es " + element[0] + " : ");
        var equipo = new Equipo(entrada, element[0]);
        equipos.push(equipo);  
    }

    if(personas.length > 0) {
        equipo.añadeJugador();
    }

    console.log(equipo);

});