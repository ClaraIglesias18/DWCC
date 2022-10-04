var entrada = prompt("Escriba una secuencia de numeros para calcular su media: "
                    + "\nFinalizar introduciendo un * ");
var sumaPar = 0;
var countPar = 0; 
var sumaImpar = 0;
var countImpar = 0;
var mediaPar;
var mediaImpar;
var mediaTotal;
var mediaMayor;

while(entrada != "*") {

    if(isNaN(entrada)) {

        alert("Debes introducir un numero");

    } else if(entrada % 1 != 0) {
        
        alert("Debes introducir un numero entero");
                
    } else if(entrada < 0){
        
        alert("Debes intrudicr un numero positivo");

    } else {

        var num = parseInt(entrada);

        if(num % 2 == 0) {

            sumaPar += num;
            countPar++;

        } else {

            sumaImpar += num;
            countImpar++;

        }
    }
    
    entrada = prompt("Escriba una secuencia de numeros: "
                    + "\nFinalizar introduciendo un * ");
    
};

mediaTotal = ((sumaImpar + sumaPar) / (countImpar + countPar));
mediaPar = sumaPar / countPar;
mediaImpar = sumaImpar / countImpar;

if(mediaTotal > mediaPar) {

    if(mediaTotal > mediaImpar) {
        mediaMayor = mediaTotal;
    } else {
        mediaMayor = mediaImpar;
    }

} else if (mediaPar > mediaImpar) {
    mediaMayor = mediaPar;
} else {
    mediaMayor = mediaImpar;
}

alert("Media de todos los numeros: " + mediaTotal 
    + "\nMedia de los numeros pares introducidos: " + mediaPar 
    + "\nSuma de los numeros impares introducidos: " + mediaImpar
    + "\nMedia mayor: " + mediaMayor);
