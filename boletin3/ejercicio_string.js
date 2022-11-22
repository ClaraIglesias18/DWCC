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
//\s elimina espacios "+" de forma consecutiva \g lo repite a lo largo del string
//var sinEspacios = entrada.replace(/\s+/g, "");
var sinEspacios = entrada.trim();
var nombreApellido = sinEspacios.split(",");

function iniciales(nombre, apellido) {
    let separarNombre = nombre.split(" ");
    let separarApellido = apellido.split(" ");
    

}

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
        (apellido.length - 2) +
        "\nX.   " +
        separarNombre[0].charAt(0) +
        "." +
        separarNombre[1].charAt(0) +
        "." +
        separarApellido[0].charAt(0) +
        "." +
        separarApellido[1].charAt(0) +
        "\nXI.  " 
        ;
}

alert(salida);
