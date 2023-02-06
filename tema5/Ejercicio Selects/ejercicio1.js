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

//pasa elementos seleccionados a aficiones selececcionadas
mayorQue.addEventListener("click", () => {

    var cont = aficionesSeleccionadas.length;
    var seleccionadas = aficionesCargadas.selectedOptions;

    for(let i = seleccionadas.length; i >= 0; i--) {
        aficionesSeleccionadas.append(seleccionadas[i], aficionesSeleccionadas.length + cont);
        cont--;
    }

});


//regresa elementos seleccionados a aficiones cargadas
menorQue.addEventListener("click", () => {

    var cont = aficionesCargadas.length;
    var seleccionadas = aficionesSeleccionadas.selectedOptions;

    for(let i = seleccionadas.length; i >= 0; i--) {
        aficionesCargadas.append(seleccionadas[i], aficionesCargadas.length - cont);
        cont++;
    }

});


//pasa todos los elementos
todosDerecha.addEventListener("click", () => {

    var cont = aficionesSeleccionadas.length;
    var seleccionadas = aficionesCargadas.options;

    for(let i = seleccionadas.length; i >= 0; i--) {
        aficionesSeleccionadas.append(seleccionadas[i], aficionesSeleccionadas.length - cont);
        cont++;
    }

});


//regresa todos los elementos
todosIzq.addEventListener("click", () => {

    var cont = aficionesCargadas.length;
    var seleccionadas = aficionesSeleccionadas.options;

    for(let i = seleccionadas.length; i >= 0; i--) {
        aficionesCargadas.append(seleccionadas[i], aficionesSeleccionadas.length - cont);
        cont++;
    }
    
});



