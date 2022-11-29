var nombre;
var apellido;
var nombreMin;
var apellidoMin;
var nombreMay;
var apellidoMay;
var salida;
var separarNombre;
var separarApellido;
var entrada = prompt(
    "Introduce nombre y apellidos con el siguiente formato: apellidos, nombre"
);

//elimina los espacios el inicio y del final
var sinEspacios = entrada.trim();

//separa la entrada por la coma creando un array con los dos elementos
var nombreApellido = sinEspacios.split(",");

if (entrada.search(",") == -1) {
    salida = "No has introducido una coma de separacion";
} else if (nombreApellido[0] == "" || nombreApellido[1] == "") {
    salida = "Has dejado algun campo vacio";
} else {
    apellido = nombreApellido[0].trim().concat(", ");
    nombre = nombreApellido[1].trim();
    nombreMin = nombre.toLowerCase();
    apellidoMin = apellido.toLowerCase();
    nombreMay = nombre.toUpperCase();
    apellidoMay = apellido.toUpperCase();
    

    salida =
        "III.   Antes de depurar: " +
        entrada +
        "\nIII.   Despues de depurar: " +
        apellido +
        nombre +
        "\nIV.   Hola " +
        nombre +
        "\nV.   " +
        (apellido.length - 2 + nombre.length) +
        "\nVI.   " +
        apellidoMin +
        nombreMin +
        "\nVII.   " +
        apellidoMay +
        nombreMay +
        "\nVIII.   " +
        nombre.length +
        "\nIX.   " +
        (apellido.length - 2) 
        ;
}

alert(salida);
