window.addEventListener("load", carga, false);
var salida = "";

function carga() {
    var misFrutas = document.getElementById("misFrutas");
    var operar = document.getElementById("operar");
    var añadir = document.getElementById("añadir");
    var borrar = document.getElementById("borrar");
    var nuevaFruta = document.getElementById("nuevaFruta");
    

    misFrutas.addEventListener("click", seleccionarBorrar);

    function seleccionarBorrar() {
        if(this.selectedOptions.length > 0) {
            borrar.checked = true;
        }
    }

    operar.addEventListener("click", () => {
        if (borrar.checked) {
            borrarFruta(misFrutas.selectedOptions);
        } else if (añadir.checked) {
            añadirFruta(capitalizar(nuevaFruta));
        }
    });
}

function añadirFruta(fruta) {
    var igual = false;

    for (let i = 0; i < misFrutas.length; i++) {
        if (quitarAcentos(misFrutas[i].value) == quitarAcentos(fruta)) {
            igual = true;
        }
    }

    if (fruta == "") {
        salida = "La entrada de texto esta vacia";
    } else if (igual) {
        salida = "La fruta introducida ya esta en la lista";
    } else {
        var option = new Option(fruta, fruta);

        misFrutas.append(option);
        salida = "Se añadio " + fruta + " a la lista de frutas";

        if (misFrutas[0].value == "No quedan frutas en la lista") {
            misFrutas[0].remove();
        }
    }

    alert(salida);
}

function borrarFruta(frutas) {
    salida = "Se van a eliminar: ";

    if (frutas.length == 0) {
        salida = "No se selecciono ninguna fruta";
    } else {
        for (let i = frutas.length - 1; i >= 0; i--) {
            salida += frutas[i].value + " ";
        }

        if (window.confirm(salida)) {
            for (let i = frutas.length - 1; i >= 0; i--) {
                frutas[i].remove();
            }
            salida = "Se eliminaron los elementos correctamente";

            if (frutas.length == 0) {
                var option = new Option(
                    "No quedan frutas en la lista",
                    "No quedan frutas en la lista"
                );

                misFrutas.append(option);
            }
        } else {
            salida = "Operacion de borrado cancelada";
        }
    }

    alert(salida);
}

function capitalizar(input) {
    var valor = input.value;
    var sinEspacios = valor.trim();
    var minusculas = sinEspacios.toLowerCase();
    var capitalizada = minusculas.charAt(0).toUpperCase() + minusculas.slice(1);

    return capitalizada;
}

function quitarAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
