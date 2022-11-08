function posMayor(numeros) {
    let mayor = 0;
    let pos;

    numeros.forEach(element => {
        if(element > mayor) {
            pos = numeros.indexOf(element);
            mayor = element;
        }
    });

    return "El numero mayor es " + mayor + " en la posicion " + pos;
}

var numeros = [3, 50, 6, 12, 0, 13, 5, 7, 33, 5, 77, 66];
alert(posMayor(numeros));