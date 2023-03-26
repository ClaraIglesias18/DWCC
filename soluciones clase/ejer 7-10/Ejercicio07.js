/*Ejercicio 07
Hacer una función que nos devuelva el mayor de dos números.
*/


//Función que retorna el mayor de dos números
//recibe:
//   num1 es el primer número
//   num2 es el segundo número
function mayor(num1,num2){
	if(num1>num2) return num1;
	return num2;
}


//pruebo la función
alert("El mayor de -5 y 3 es: "+mayor(-5,3));
alert("El mayor de 0 y -2 es: "+mayor(0,-2));