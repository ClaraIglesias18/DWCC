/*Ejercicio 11,12 y 13
Para hacer con el ejercicio número 6:
11.	Hacer una función que diga 
    si un alumno está matriculado en un módulo.
12.	Hacer una función que diga 
    si un alumno tiene clase un día de la semana en concreto.
13.	Hacer una función que diga el número de alumnos 
    que están matriculados en un módulo concreto.
*/

//11.
//función que dice si un alumno está matriculado en un módulo
//recibe:
//	cod- codigo de usuario (ej:DAW201)
//	mod- nombre del módulo (ej: DCLI)
//  array- el array mixto donde:
//		la clave es el código de usuario y 
//		el contenido es un array con los nombres de los módulos en los que esá matriculado
//retorna:
//	false si el alumno con ese código de usuario no está matriculado en ese módulo
//	true si el alumno con ese código de usuario está matriculado en ese módulo
function estaMatriculado(cod,mod,array){
	return array[cod].includes(mod);
    
/* otra forma  
	if (array[cod].indexOf(mod)!=-1) { //está matriculado en el módulo recibido como argumento
		return true;
	} else {
		return false;
	}
    // o bien
    return (array[cod].indexOf(mod)!=-1);
*/
}

//12.
//función que dice si un alumno tiene clase un día de la semana
//recibe:
//  cod- codigo de usuario (ej:DAW201)
//  dia- día de la semana (número de 0 a 6- 0-lunes, 1-martes,...)
//  array- el array mixto donde:
//		la clave es el código de usuario y 
//		el contenido es un array con los nombres de los módulos en los que esá matriculado
//  horario- un array bidimensional con el horario de la clase	
//		las filas representan las horas (1ª,2ª,..)
//		las columnas representan los días de la semana (0-lunes, 1-martes,...)
//retorna:
//	false si el alumno no tiene clase ese día de la semana
//	true si el alumno tiene clase ese día de la semana
function tieneClase(cod,dia,array,horario){
	let modulosCodigo=modulosMatricula(cod,array);
	let modulosDiaSemana=modulosDia(dia,horario);
	/*
	for (var nModulo=0;nModulo<modulosCodigo.length;nModulo++){
		if(modulosDiaSemana.includes(modulosCodigo[nModulo])) return true;
	}
	*/
	let nModulo=0; //se puede hacer con el for de arriba
	while (nModulo<modulosCodigo.length){
		if(modulosDiaSemana.includes(modulosCodigo[nModulo])) return true;
		nModulo++;	  
	}
	return false;
}

//función que retorna los módulos que se imparten un día de la semana
//recibe:
//  dia- dia de la semana (número de 0 a 6)
//  horario- un array bidimensional con el horario de la clase	
//		las filas representan las horas (1ª,2ª,..)
//		las columnas representan los días de la semana (0-lunes, 1-martes,...)//retorna:
//retorna:
//	un array con los módulos que se dan ese días
function modulosDia(dia,horario){
	let modulos=[]; //se almacenan los módulos que se dan en un día concreto
	//recorro las filas del array de horario
	for (var nHora=0;nHora<horario.length;nHora++){
		modulos.push(horario[nHora][dia]);
	}
	return modulos;
}

//function que me retorna los módulos en los que está matriculado un alumno
//recibe:
//	cod- código de usuario del alumno
//  array- el array mixto donde:
//		la clave es el código de usuario y 
//		el contenido es un array con los nombres de los módulos en los que esá matriculado
//retorna:
//  un array con los módulos en los que está matriculado
function modulosMatricula(cod,array){
	return array[cod];
}

//13.
//función que dice el número de alumnos que están matriculados en un módulo concreto.
//recibe:
//	mod-  nombre del módulo (ej: DCLI)  
//  array- el array mixto donde:
//		la clave es el código de usuario y 
//		el contenido es un array con los nombres de los módulos en los que esá matriculado
//retorna:
//	un 0 si no hay alumnos matriculados
//  un número entero positivo si hay alumnos matriculados (el nº de alumnos matriculados en un módulo concreto)	
function numeroMatriculadosModulo(mod,array){
	//recorro el array mixto entero y cuento las veces que un alumno tiene ese módulo
	let cuantos=0;//irá contabilizando el nº de alumnos que tienen un módulo concreto
	for (var codigo in array){
		if (array[codigo].includes(mod)) cuantos++;
	}
	return cuantos;
}

//variables globales para probar las funciones
var users={
	"DAW201":"Iria",
	"DAW202":"Elena",
	"DAW203":"Oscar",
	"DAW204":"Baris",
	"DAW205":"Rubén",
	"DAW206":"Ivan",
	"DAW207":"Manuel",
	"DAW208":"Alberto",
	"DAW209":"Diego",
	"DAW210":"Alejandro",
	"DAW211":"Raul",
	"DAW212":"Ismael",
	"DAW213":"Belinda",
	"DAW214":"Erik",
	"DAW215":"Juan"
};
//b
var modulos={
	"DCLI":"Bea",
	"DINT":"Ana",
	"DAPW":"Juan",
	"EIEM":"Marta",
	"DSER":"Luis"
};
//c
var horasClase=[
	["DCLI","EIEM","DAPW"],
	["DCLI","EIEM","DAPW"],
	["DSER","DSER","DSER"],
	["DSER","DSER","DSER"],
	["DINT","DCLI","DINT"],
	["DINT","DCLI","DINT"]
];
//d
var modulosUsers={
	"DAW201":new Array("DCLI","EIEM","DAPW"),
	"DAW202":new Array("DCLI","EIEM","DAPW"),
	"DAW203":new Array("DCLI","EIEM","DAPW"),
	"DAW204":new Array("DCLI","EIEM","DAPW"),
	"DAW205":new Array("DCLI","EIEM","DAPW"),
	"DAW206":new Array("DCLI","EIEM","DAPW"),
	"DAW207":new Array("DCLI","EIEM","DAPW"),
	"DAW208":new Array("DCLI","EIEM","DAPW"),
	"DAW209":new Array("DCLI","EIEM","DAPW"),
	"DAW210":new Array("DCLI","EIEM","DAPW"),
	"DAW211":new Array("DCLI","EIEM","DAPW"),
	"DAW212":new Array("DCLI","EIEM","DAPW"),
	"DAW213":new Array("DCLI","DINT","EIEM","DAPW"),
	"DAW214":new Array("DCLI","EIEM","DAPW"),
	"DAW215":new Array("DCLI","DAPW")
};

//ponemos a pueba la 11
if (estaMatriculado("DAW215","EIEM",modulosUsers)){
	alert("El alumno con código de usuario DAW215 está matriculado en EIEM");
} else {
	alert("El alumno con código de usuario DAW215 no está matriculado en EIEM");
}
//ponemos a pueba la 12
if (tieneClase("DAW215",2,modulosUsers,horasClase)){
	alert("El alumno con código de usuario DAW215 tiene clase el miércoles");
} else {
	alert("El alumno con código de usuario DAW215 no tiene clase el miércoles");
}
//ponemos a prueba el 13
alert("hay "+numeroMatriculadosModulo("EIEM",modulosUsers)+" alumnos matriculados en EIEM");

