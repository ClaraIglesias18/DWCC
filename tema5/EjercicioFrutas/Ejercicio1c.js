var misFrutas = document.getElementById("misFrutas");
var operar = document.getElementById("operar");
var añadir = document.getElementById("añadir");
var borrar = document.getElementById("borrar");

operar.addEventListener("click", () => {

    if(borrar.hasFocus) {
        
        var seleccionados = misFrutas.selectedOptions;
        console.log(true);
        
        for(let i = 0; i <= seleccionados.length; i++) {
            seleccionados[i].remove();
        }

    } else if(añadir.hasFocus) {

    }

});
