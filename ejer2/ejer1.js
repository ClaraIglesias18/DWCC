var entrada = prompt("Introduce un digito: "); 
var salida = "";
var suma = 0;

while(entrada != "*") {

    if (entrada.length > 1) {
        alert("Tienes que introducir un numero entero entre 0 y 9");
    } else {

        var numero = parseInt(entrada);

        if(Number.isNaN(numero)) {
            alert("Tienes que introdcuir un numero entero");
        } else {
            suma += numero;
            salida += numero + "";
        }

    }

    entrada = prompt("introduce un digito: ");

}

if(suma % 3 == 0) {
    alert("Numero dado: " + salida + "\nEs divisible entre 3");
} else {
    alert("Numero dado: " + salida + "\nNO es divisible entre 3");
}