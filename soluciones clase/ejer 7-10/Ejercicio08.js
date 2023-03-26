/*Ejercicio 08
Hacer una función que nos devuelva el mayor 
y el menor de los números almacenados en un array
*/

//función que devuelve un array con el mayor y el menor de una lista de números
//recibe:
//  un array de números
//devuelve:
//  un array de longitud 2 [0]- menor de todos  [1] - mayor de todos

function mayorYmenor(array){
	let menor=array[0];
	let mayor=array[0];
	for (var nPos=1;nPos<array.length;nPos++){
		if(array[nPos]<menor) menor=array[nPos];
		if(array[nPos]>mayor) mayor=array[nPos];
	}
	return [menor,mayor];
}

alert("El menor y el mayor de 3,5,8,2,98,-3 son: "+mayorYmenor([3,5,8,2,98,-3]));