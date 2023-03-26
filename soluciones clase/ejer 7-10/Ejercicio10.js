/*Ejercicio 10
Hacer una función que devuelva verdad o falso 
si un número es un término de Fibonacci.
*/
//función que dice si un número es o no es un término de la serie de Fibonacci
//recibe
//  un número
//retorna
//  false si el número no pertenece a la serie
//  true si el número pertenece a la serie
function esTerminoFibonacci(num){
	var termino1=0; //es el penúltimo
	var termino2=1; //es el último
	var termino=termino1+termino2; //es el término nuevo generado
	if ((num==0)||(num==1)) return true;
	while (termino<num){ //y mientras el termino generado sea menor que el dato introducido seguimos generando términos nuevos
		termino1=termino2;
		termino2=termino;
		termino=termino1+termino2;
	}
	//al salir termino es >= numero
	if (termino==num) return true;
	return false;
}

//pongo a prueba la función
if (esTerminoFibonacci(345)){
	alert("el número 345 es un término de la serie de Fibonacci");
} else {
	alert("el número 345 no es un término de la serie de Fibonacci");
}
if (esTerminoFibonacci(13)){
	alert("el número 13 es un término de la serie de Fibonacci");
} else {
	alert("el número 13 no es un término de la serie de Fibonacci");
}