/*Ejercicio 09
Hacer una función que nos devuelva la posición 
que ocupa el mayor de los elementos de un array
*/

//función que retorna lo posición que ocupa el mayor de los elemnetos de un array
//recibe:
//	un array
//devuelve:
//	un número que representa la posición donde encontró el mayor de todos la primera vez que aparece
function posicionMayor(array){
	let mayor=array[0];
	let posicion=0;
	for (var nPos=1;nPos<array.length;nPos++){
		if(array[nPos]>mayor){
			posicion=nPos;
			mayor=array[nPos];
		}
	}
	return posicion;
}

alert("El  mayor de los números 3,7,-4,87,34 está en la "+(posicionMayor([3,7,-4,87,34])+1)+"ª posición");