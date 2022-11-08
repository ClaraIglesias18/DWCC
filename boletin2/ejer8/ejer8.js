function mayorMenor(numeros) {
    let mayor = 0;
    let menor = numeros[0];

    numeros.forEach(element => {
        if(element > mayor) {
            mayor = element;
        }
        if(element < menor) {
            menor = element;
        }
    });

    return "Numero mayor: " + mayor 
         +  "\nNumero menor: " + menor;
}

var numeros = [3, 50, 6, 12, 0, 13, 5, 7, 33, 5, 77, 66];
alert(mayorMenor(numeros));