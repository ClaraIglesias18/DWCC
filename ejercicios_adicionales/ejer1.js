var entrada = prompt("Escriba una secuencia de numeros: ");
var sumaPar = 0;
var countPar = 0; 
var sumaImpar = 0;
var countImpar = 0;

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
    
    entrada = prompt("Escriba una secuencia de numeros: ");
    
};

alert("Media de los numeros pares introducidos: " + sumaPar/countPar + "\nSuma de los numeros impares introducidos: " + sumaImpar/countImpar);
