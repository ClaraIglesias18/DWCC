var entrada = prompt("Calcular si un numero es divisible entre 3"
                    + "\nIntroduce un digito: "
                    + "\nFinalizar introduciendo un * ");
var num;
var suma = 0;
var numeroCadena = "";

while(entrada != "*") {

    if(isNaN(entrada)) {
        alert("Debes introducir un numero entero");
    } else {
            
        if(entrada.length > 1) {

            alert("Debes introducir un numero entero del 0 al 9");

        } else {

            numeroCadena += " + " + entrada; 
            num = parseInt(entrada);
            suma += num;

        }

    }

    entrada = prompt("Introduce el siguiente digito: "
                    +"\nFinalizar introduciendo un * ");

}

if(suma % 3 == 0) {

    alert("El numero es divisible entre 3 por que " + suma
        + " que es " + numeroCadena.slice(3) + " lo es");

} else {

    alert("El numero no es divisible entre 3 por que " + suma
        + " que es " + numeroCadena.slice(3) + " no lo es");

}
