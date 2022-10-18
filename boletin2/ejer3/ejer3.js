var nombres = new Array("Jose", "Julio", "Luis", "Bea", "Julio", "Maria", "Luis", "Luis", "Raul", "Jose Luis");
var modulos = new Array("Interfaces", "Despliegue", "Servidor", "Cliente", "Sistemas", "Redes", "BaseDatos", "Lima", "Implantacion", "Seguridad");
var alumnos = new Array(21, 27, 30, 15, 10, 20, 25, 32, 13, 16);
var nombre = prompt("Dime el nombre del profesor: ");
var imparte = false;
var countMod = 0;
var modulosImparte = "";
var sumaAlumnos = 0;
var mediaAlumnos;
var mayorNumAlum = 0;
var posMayorNumAlum;
var salida = "";

if(Number(nombre)) {
    salida += "Debes introducir un nombre no un numero";
} else if(!nombre) {
    salida += "No puedes dejar la entrada vacia";
} else {

    for(let i = 0; i <= nombres.length - 1; i++) {
        if(nombre == nombres[i]) {
            imparte = true;
        }
    }

    if(imparte) {
        for(let i = 0; i <= nombres.length - 1; i++){
            if(nombres[i] == nombre){
                countMod++;
                modulosImparte += modulos[i] + " ";
                sumaAlumnos += alumnos[i];
            }  
        }
    
        salida += "El profesor " + nombre + " imparte algun modulo."
        + "\nEl profesor imparte " + countMod + " modulo/s."
        + "\nImparte: " + modulosImparte
        + "\nTiene un total de: " + sumaAlumnos + " alumnos."
        + "\nUna media de " + sumaAlumnos/countMod + " alumnos por modulo.";
    
    } else {
        salida += nombre + " no es ningun profesor";
    }
}

for(let i = 0; i <= alumnos.length - 1; i++) {
    if(alumnos[i] > mayorNumAlum) {
        mayorNumAlum = alumnos[i];
        posMayorNumAlum = i;
    }
}

salida += "\nEl profesor " + nombres[posMayorNumAlum]
    + " es el que tiene mayor numero de alumnos matriculados en el modulo "
    + modulos[posMayorNumAlum] + " con un numero de " + alumnos[posMayorNumAlum] + " alumnos.";

alert(salida);



