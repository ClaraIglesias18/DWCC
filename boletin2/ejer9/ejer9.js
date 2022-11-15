function posMayor(numeros) {
    let mayor = 0;
    let pos;
    let array = [];

    numeros.forEach(element => {
        if(element > mayor) {
            pos = numeros.indexOf(element);
            mayor = element;
        }
    });

    array.push(mayor, pos);

    return array;
}

var numeros = [3, 50, 6, 12, 0, 13, 5, 7, 33, 5, 77, 66];
alert("El numero mayor es " + posMayor(numeros)[0] + " en la posicion " + posMayor(numeros)[1]);