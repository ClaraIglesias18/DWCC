function capitalizar(palabra) {
    var valor = palabra.value;
    var sinEspacios = valor.trim();
    var minusculas = sinEspacios.toLowerCase();
    var capitalizada = minusculas.charAt(0).toUpperCase() + minusculas.slice(1);

    return capitalizada;
}

function quitarAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
