var deposito = 50000;
var importe = prompt("Introduce el importe deseado: ");
var countVehiculos = 0;
var sumaImport = 0;
var mediaImporte;
var porcentaje;

while (importe != "*") {

    var importeNum = parseInt(importe);
    var litros = importeNum / 1.24;
    
    if(deposito - litros < 5000) {
        var nuevosLitros = (litros - (5000 - (deposito - litros)));
        alert("Solo se le podra administrar " + nuevosLitros + " litros");
        deposito = 5000;
        sumaImport += (nuevosLitros * 1.24);

    } else {
        alert("Va a repostar " + litros + " litros");
        deposito -= litros;
        sumaImport += importeNum;
    }

    countVehiculos++;

    if(deposito == 5000) {
        importe = "*";
    } else {
        importe = prompt("Introduce el importe deseado: ");
    }

}

mediaImporte = sumaImport/countVehiculos;
if(deposito > 5000) {
    porcentaje = ((deposito - 5000) / 45000) * 100;
} else {
    porcentaje = 0;
}

alert("Han repostado: " + countVehiculos + " vehiculos"
        + "\nHan quedado " + deposito + " litros"
        + "\nEl importe medio gastado es :" + mediaImporte
        + "\nEl Porcentaje de deposito por encima del minimo es: " + porcentaje + "%");