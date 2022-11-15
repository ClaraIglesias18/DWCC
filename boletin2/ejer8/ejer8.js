function mayorMenor(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];
    let array = []; 

    numeros.forEach(element => {
        if(element > mayor) {
            mayor = element;
        }
        if(element < menor) {
            menor = element;
        }
    });

    array.push(mayor, menor);

    return array;
}

var numeros = [3, 50, 6, 12, 0, 13, 5, 7, 33, 5, 77, 66];
alert("El numero mayor es: " + mayorMenor(numeros)[0]
        + "El numero menor es: " + mayorMenor(numeros)[1]);