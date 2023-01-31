var mascotas = [
    1 = ["Perro", 6, "Max", "Clara"],
    2 = ["Gato", 10, "Mia", "Juan"],
    3 = ["Cobaya", 13, "Cobi", "Laura"],
    4 = ["Iguana", 3, "Marina", "Pepe"],
    5 = ["Perro", 6, "Gala", "Pepita"]
]

var propietarios = [

]

function mayuscula(texto) {

    return texto[0].toUpperCase()+texto.substring(1).toLowerCase();
}

function Propietario(nombre, tipoMascota, edadMascota, nombreMascota) {
    this.nombre = nombre;
    this.tipoMascota = tipoMascota;
    this.edadMascota = edadMascota;
    this.nombreMascota = nombreMascota;
}

function crearPropietarios(mascotas) {
    var propietarios = [];
    mascotas.forEach(element => {
        propietarios.push(new Propietario(element[3], element[0], element[1], element[2]))
    });
}