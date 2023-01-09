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
    let transforacion = "";
    let textoSinEspacios = texto.trim(); 
    let inicial = textoSinEspacios.slice(0,1);
    let cuerpo = textoSinEspacios.slice(1);

    transforacion += inicial.toUpperCase();
    transforacion += cuerpo.toLowerCase();
    
    return transforacion;
}

function Popietario(nombre, tipoMascota, edadMascota, nombreMascota) {
    this.nombre = nombre;
    this.tipoMascota = tipoMascota;
    this.edadMascota = edadMascota;
    this.nombreMascota = nombreMascota;
}