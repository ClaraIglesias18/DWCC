var aficiones=["Leer","Dormir","Cine","Videojuegos","Fúbol","Tenis","Nadar","Bucear","Senderismo","Escalada","Esquiar","Pescar"];

var aficionesCargadas = document.getElementById("aficiones");
var aficionesSeleccionadas = document.getElementById("aficionesSeleccionadas");
var mayorQue = document.getElementById("pasaSeleccionados");
var menorQue = document.getElementById("regresaSeleccionados");
var todosDerecha = document.getElementById("pasaTodos");
var todosIzq = document.getElementById("regresaTodos");

window.addEventListener("load",cargarAficiones,false);

function cargarAficiones() {

    for (let i = 0; i < aficiones.length; i++) {
        
        var texto = document.createTextNode(aficiones[i]);
        var option = document.createElement("option");
        option.setAttribute("id", aficiones[i]);

        option.appendChild(texto);

        aficionesCargadas.append(option);
        
    }

}

mayorQue.addEventListener("click", () => {

    var seleccionadas = aficionesCargadas.selectedOptions;

    console.log(seleccionadas.length);

    for(let i = 0; i <= seleccionadas.length; i++) {
        aficionesSeleccionadas.append(seleccionadas[i]);
    }

});



function pasaSeleccionados(seleccionadas) {

    

    for(let i = 0; i < seleccionadas.length; i++) {
        aficionesSeleccionadas.append(seleccionadas[i]);;
    }
}

function regresaSeleccionados() {

}


todosDerecha.addEventListener("click", () => {

    var seleccionadas = aficionesCargadas.options;

    console.log(seleccionadas);

    for (let i = 0; i < seleccionadas.length; i++) {
        
        aficionesSeleccionadas.append(seleccionadas[i]);
        
    }
    

});

function regresaTodos() {

}



