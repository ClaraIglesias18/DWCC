var aficiones=["Leer","Dormir","Cine","Videojuegos","Fúbol","Tenis","Nadar","Bucear","Senderismo","Escalada","Esquiar","Pescar"];

var aficionesCargadas = document.getElementById("aficiones");
var aficionesSeleccionadas = document.getElementById("aficionesSeleccionadas");
var mayorQue = document.getElementById("pasaSeleccionados");
var menorQue = document.getElementById("regresaSeleccionados");
var todosDerecha = document.getElementById("pasaTodos");
var todosIzq = document.getElementById("regresaTodos");

window.addEventListener("load",cargarAficiones,false);

//carga todas las aficiones del array
function cargarAficiones() {

    for (let i = 0; i < aficiones.length; i++) {
        
        var texto = document.createTextNode(aficiones[i]);
        var option = document.createElement("option");
        option.setAttribute("id", aficiones[i]);

        option.appendChild(texto);

        aficionesCargadas.append(option);
        
    }

}


//arreglar la carga de los elementos
mayorQue.addEventListener("click", () => {

    var seleccionadas = aficionesCargadas.selectedOptions;

    console.log(seleccionadas.length);

    for(let i = seleccionadas.length; i <= 0; i--) {
        aficionesSeleccionadas.append(seleccionadas[i]);
    }

});


//pasa elementos seleccionados a la seccion de aficiones seleccionadas
menorQue.addEventListener("click", () => {



});


//pasa todos los elementos a la seccion de aficiones seleccionadas
todosDerecha.addEventListener("click", () => {

    var seleccionadas = aficionesCargadas.options;

    console.log(seleccionadas);

    for (let i = seleccionadas.length; i >= 0; i--) {
        
        aficionesSeleccionadas.append(seleccionadas[i]);
        
    }
    

});


//regresa todos los elementos
todosIzq.addEventListener("click", () => {

});



