var nombres = new Array("España", "Francia", "Suecia", "Italia", "Noruega", "Portugal", "Holanda");
var salida = "";

//eliminar "España" e introducir en su lugar "Alemania", "Dinamarca", "Grecia", "Suiza"
nombres.splice(0, 1, "Alemania", "Dinamarca", "Grecia", "Suiza");
nombres.sort();
//insertar por el principio
nombres.unshift("Belgica");

for(clave in nombres) {
    salida += nombres[clave] + " ";
}

alert(salida);
