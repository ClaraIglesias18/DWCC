/*Ejercicio 14
Definir un objeto Grupo que tendrá:
	Como propiedades:
		•	Nombre del grupo.
		•	Lista de alumnos del grupo (array denso).
		•	Tutor del grupo.
		•	Delegado del grupo.
		•	Subdelegado del grupo.
	Como métodos:
		•	Establecer el nombre del grupo.
		•	Establecer el nombre del tutor.
		•	Establecer el nombre del delegado.
		•	Establecer el nombre del subdelegado.
		•	Añadir un nombre de alumno a la lista.
		•	Eliminar un nombre de alumno de la lista. 
		•	Devolver el nombre del grupo.
		•	Devolver el nombre del tutor.
		•	Devolver el nombre del delegado.
		•	Devolver el nombre del subdelegado.
		•	Devolver la lista de alumnos.
*/

function Grupo(nombre,listaAlumnos,tutor,delegado,subdelegado){
	//propiedades que se establecen con el valor recibido como argumento o con un valor por defecto 
	this.nombre=nombre||"DAW2";
	this.listaAlumnos=listaAlumnos.concat([])||new Array("Sara","Mohamed");
	this.tutor=tutor||"Bea";
	this.delegado=delegado||"Sara";
	this.subdelegado=subdelegado||"Mohamed";
	
    //métodos que establecen los valores de las propiedades
	this.setNombre=function(nombre){this.nombre=nombre;};
	this.setDelegado=function(delegado){this.delegado=delegado;};
    this.setSubdelegado=function(subdelegado){this.subdelegado=subdelegado;};
    this.setTutor=function(tutor){this.tutor=tutor;};
    
    //métodos que retornan el valor de las propiedades
	this.getNombre=function(){return this.nombre;};
	this.getDelegado=function(){return this.delegado;};
	this.getSubdelegado=function(){return this.subdelegado;};
	this.getTutor=function(){return this.tutor;};
	this.getLista=function(){return this.listaAlumnos;}; 
    //no devuelvo this.listaAlumnos.concat([]) porque solo voy a utilizar el resultado devuelto en alert
    //si lo fuese a asignar a una variable en la cual podría añadir o borrar elementos tendría que
    //hacerlo para garantizar que los cambios en dicha variable no afectaran a la propiedad del objeto
	
    //Añadir un nombre de alumno/a a la lista.
    //retorna true si el alumno/a ha sido añadido a la lista y false en caso contrario
	this.addAlumno=function(alumno){
        if (this.esAlumno(alumno)) return false;
		this.listaAlumnos.push(alumno);
        return true;
	};
	
    //Eliminar un nombre de alumno/a de la lista.
    //retorna true si se hizo la eliminación y false en caso contrario
	this.eliminarAlumno=function(alumno){
		var pos=this.posAlumno(alumno);
		if (pos!=-1) {
			this.listaAlumnos.splice(pos,1);
            return true;
		}
        return false;
	};
	
	//retorna la posición de un alumno/a si está en la lista o -1 en caso contrario
	this.posAlumno=function(alumno){
		return this.listaAlumnos.indexOf(alumno);
	};
    
    //otros métodos que completarían el objeto
    
    //Retorna true si el alumno/a existe y false en caso contrario
    this.esAlumno=function(alumno){
        return this.listaAlumnos.includes(alumno);
    };
    
    //Retorna true si el alumno/a es delegado
    this.esDelegado=function(alumno){
        return this.delegado==alumno;
    };
    
    //Retorna true si el alumno/a es subdelegado
    this.esSubdelegado=function(alumno){
        return this.subdelegado==alumno;
    };
}

//poniendo a prueba el objeto

var lista=["Sara","Mohamed","Enrique","Pepe","Luis"];
var unGrupo=new Grupo("Daw1",lista,"Ana","Pepe","Luis");
var alumnoABorrar=prompt("Introduce el nombre del alumno/a que se dará de de baja");

//muestro las listas que hay en la variable global y en la propiedad del objeto para 
//comprobar que son dos listas diferentes por haber hecho el concat([]) al asignar el 
//array que se recibe como argumento
alert("Lista en la variable global: "+lista+"\nlista de alumnos en la propiedad del objeto: "+unGrupo.getLista()+" \ntutor : "+unGrupo.getTutor());

//añadiendo una alumna llamada Luisa
if (unGrupo.addAlumno("Luisa")) {
    alert("Luisa se ha añadido a la lista de alumnos/as");
} else {
    alert("Luisa ya es una alumna del grupo");
}
alert("Lista en la variable global: "+lista+"\nlista de alumnos en la propiedad del objeto: "+unGrupo.getLista());
if (unGrupo.esDelegado(alumnoABorrar)){
    alert(alumnoABorrar+" no se puede borrar porque es delegado/a.\nAntes deberá establecer otro delegado/a");
} else if (unGrupo.esSubdelegado(alumnoABorrar)) {
    alert(alumnoABorrar+" no se puede borrar porque es subdelegado.\nAntes deberá establecer otro subdelegado/a"); 
} else if (unGrupo.eliminarAlumno(alumnoABorrar)) {
	alert("La baja de "+alumnoABorrar+" se ha realizado con éxito\nLista en la variable global: "+lista+"\nLista de alumnos en la propiedad del objeto: "+unGrupo.getLista());
} else {
	alert("El alumno/a "+alumnoABorrar+" no está en este grupo");
}

