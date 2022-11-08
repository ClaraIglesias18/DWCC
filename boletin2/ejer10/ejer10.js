function fibonacci() {
    let n1 = parseInt(n);
    let numeros = [];
    let i = 2;
    let pertenece = false;
    numeros[0] = 1;
    numeros[1] = 1;
    numeros[i] = numeros[i - 2] + numeros[i - 1];

    while(numeros[i] <= n1) {
        i++;
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }

    numeros.forEach(element => {
        if(element == n1) {
            pertenece = true;
        }
    });

    if (pertenece) {
        return "Pertenece a la sucesion";
    } else {
        return "NO pertenece";
    }
}

var n = prompt("Ingrese un numero: ");
alert(fibonacci(n));