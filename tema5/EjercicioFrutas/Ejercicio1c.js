var misFrutas = document.getElementById("misFrutas");
var operar = document.getElementById("operar");
var añadir = document.getElementById("añadir");
var borrar = document.getElementById("borrar");
var nuevaFruta = document.getElementById("nuevaFruta");
var salida = "";

misFrutas.addEventListener("click", () => {
    borrar.checked = true;
});

operar.addEventListener("click", () => {
    

    if(borrar.checked) {
        
        borrarFruta(misFrutas.selectedOptions);

    } else if(añadir.checked) {
        
        añadirFruta(capitalizar(nuevaFruta));
        
    }

});

function añadirFruta(fruta) {
    var igual = false;

    for(let i = 0; i < misFrutas.length; i++) {
        if(quitarAcentos(misFrutas[i].value) == quitarAcentos(fruta)) {
            igual = true;
        }
    }

    if(fruta == "") {
        salida = "La entrada de texto esta vacia";
    }else if(igual) {
        salida = "La fruta introducida ya esta en la lista";
    } else {
        var texto = document.createTextNode(fruta);
        var option = document.createElement("option");

        option.setAttribute("value", fruta);
        option.appendChild(texto);

        misFrutas.append(option);
        salida = "Se añadio " + fruta + " a la lista de frutas";

        if(misFrutas[0].value == "No quedan frutas en la lista") {
            misFrutas[0].remove();
        }

    }

    alert(salida);
};

function borrarFruta(fruta) {
    salida = "Se van a eliminar: ";

    if(fruta.length == 0) {
        salida = "No se selecciono ninguna fruta";
    } else {
        for(let i = fruta.length - 1; i >= 0; i--) {
            salida += fruta[i].value + " ";
        }
    
        if(window.confirm(salida)) {
            for(let i = fruta.length - 1; i >= 0; i--) {
                fruta[i].remove();
            }
            salida = "Se eliminaron los elementos correctamente";

            if(misFrutas.length == 0) {
                var texto = document.createTextNode("No quedan frutas en la lista");
                var option = document.createElement("option");

                option.setAttribute("value", "No quedan frutas en la lista");
                option.appendChild(texto);

                misFrutas.append(option);
            }
        } else {
            salida ="Operacion de borrado cancelada";
        }
    }

    alert(salida);
}

function capitalizar(palabra){
    var valor = palabra.value;
    var sinEspacios = valor.trim();
    var minusculas = sinEspacios.toLowerCase();
    var capitalizada = minusculas.charAt(0).toUpperCase() + minusculas.slice(1);
    
    return capitalizada;
};

function quitarAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
