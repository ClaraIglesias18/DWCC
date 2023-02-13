//array que almacena los datos de los platos: nombre y precio
var platos = [
    ["Cochinillo asado", 22],
    ["Huevos rotos con chorizo", 10],
    ["Cocido gallego", 14],
    ["Salmón a la plancha", 12],
    ["Merluza a la gallega", 16],
    ["Escalopines de ternera", 10],
    ["Ternera asada", 10],
    ["Rodaballo de la ría", 28],
    ["calamares en su tinta", 15],
];
//array que almacena los datos de las bebidas: nombre y precio
var bebidas = [
    ["Agua", 1],
    ["Refresco", 1.5],
    ["Botella de Godello", 12],
    ["Botella de Ribera del Duero", 16],
    ["Botella de Cava", 15],
    ["Botella de Rioja"],
    ["Botella de Albariño", 14],
];
//array que almacena los datos de los postres: nombre y precio
var postres = [
    ["Goulant con nata", 5],
    ["Fresas con nata", 4],
    ["Filloas rellenas", 3.5],
    ["Pieza de fruta", 1],
    ["Natillas", 2.5],
    ["Arroz con leche", 3],
    ["Bola de helado", 1.5],
];

var selectPlatos = document.getElementById("plato");
var selectBebidas = document.getElementById("bebida");
var selectPostres = document.getElementById("postre");
var generarMenu = document.getElementById("generarMenu");
var favorito = document.getElementById("favorito");
var grabarFavorito = document.getElementById("grabarFavorito");

window.addEventListener("load", cargar, false);

generarMenu.addEventListener("click", () => {

});

function cargar() {
    //cargar platos
    for (let i = 0; i < platos.length; i++) {
        if (i == 0) {
            let texto = document.createTextNode("Ninguno");
            let option = document.createElement("option");

            option.setAttribute("value", "Ninguno");
            option.appendChild(texto);

            selectPlatos.append(option);
        }

        let texto = document.createTextNode(platos[i][0]);
        let option = document.createElement("option");

        option.setAttribute("value", platos[i][0]);
        option.appendChild(texto);

        selectPlatos.append(option);
    }

    //cargar bebidas
    for (let i = 0; i < bebidas.length; i++) {

		if(i == 0) {
            let texto = document.createTextNode("Ninguno");
            let option = document.createElement("option");

            option.setAttribute("value", "Ninguno");
            option.appendChild(texto);

            selectBebidas.append(option);
        }

        let texto = document.createTextNode(bebidas[i][0]);
        let option = document.createElement("option");

        option.setAttribute("value", bebidas[i][0]);
        option.appendChild(texto);

        selectBebidas.append(option);
    }

    //cargar postres
    for (let i = 0; i < postres.length; i++) {

		if(i == 0) {
            let texto = document.createTextNode("Ninguno");
            let option = document.createElement("option");

            option.setAttribute("value", "Ninguno");
            option.appendChild(texto);

            selectPostres.append(option);
        }

        let texto = document.createTextNode(postres[i][0]);
        let option = document.createElement("option");

        option.setAttribute("value", postres[i][0]);
        option.appendChild(texto);

        selectPostres.append(option);
    }


}
