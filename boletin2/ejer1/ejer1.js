var nombres = new Array("España", "Francia", "Suecia", "Italia", "Noruega", "Portugal", "Holanda");
var salida = "";

nombres.splice(0, 1, "Alemania", "Dinamarca", "Grecia", "Suiza");
nombres.sort();
nombres.unshift("Belgica");

for(clave in nombres) {
    salida += nombres[clave] + " ";
}

alert(salida);
