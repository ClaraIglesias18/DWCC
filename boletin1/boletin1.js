//Ejercicio1
//Visualizar los 10 primeros números naturales.
function ejer1() {
    var arr1 = [];
    for (let i = 1; i <= 10; i++){
        arr1.push(i);
    }

    alert(arr1);
}

//Ejercicio2
//Visualizar los 10 primeros números pares.
function ejer2() {
    arr1 = [];

    for (let i = 2; i <= 20; i++) {
        if(i % 2 == 0) {
            arr1.push(i);
        }
    }

    alert(arr1);
}

//Ejercicio3
//Visualizar la media de los 10 primeros números naturales.
function ejer3() {
    var suma = 0;

    for (let i = 1; i <= 10; i++ ){
        suma += i;
    }

    alert(suma/10);
}

//Ejercicio4
//Visualizar los N primeros números naturales
function ejer4() {
    var n = prompt("Ingresa el numero limite: ");
    var arr1 = [];

    for(let i = 1; i <= n; i++) {
        arr1.push(i);
    }

    alert(arr1);
}

//Ejercicio5
// Visualizar la suma de los N primeros números naturales
function ejer5() {
    var n = prompt("Ingresa el numero limite: ");
    var suma = 0;

    for(let i = 1; i <= n; i++) {
        suma += i;
    }

    alert(suma);
}

//Ejercicio6
//Visualizar la media de los N primeros números naturales.
function ejer6() {
    var n = prompt("Ingresa el numero limite: ");
    var suma = 0;

    for(let i = 1; i <= n; i++) {
        suma += i;
    }

    alert(suma/n);
}

//Ejercicio7
//Hacer 4, 5 y 6 en el mismo ejercicio
function ejer7() {
    var n = prompt("Ingresa el numero limite: ");
    var suma = 0;
    var salida = "";

    for(let i = 1; i <= n; i++) {
        suma += i;
        salida += i + " ";
    }

    alert("Numeros dados: " + salida + "\nSuma de los numeros: " + suma + "\nMedia de los numeros: " + (suma/n));
}

//Ejercicio8
//Visualizar si 327 es un número primo
function ejer8() {
    var n = 327;
    var divisor = 0;

    for(let i = 2; i <= n; i++) {

        if(n % i == 0) {
            divisor++;
        }        
    
    }

    if(divisor > 2) {
        alert("El numero no es primo");
    } else {
        alert("El numero es primo");
    }
}

//Ejercicio9
//Visualizar si un número N es un número primo.
function ejer9() {
    var n = prompt("Ingresa el numero: ");
    var divisor = 0;

    for(let i = 1; i <= n; i++){

        if(n % i == 0) {
            divisor++;
        }

    }

    if(divisor > 2) {
        alert("El numero no es primo");
    } else {
        alert("El numero es primo");
    }
}

//Ejercicio10
//Visualizar los 10 primeros números primos
function ejer10() {
    var salida = "";

    for (var i = 1; i <= 10; i++) {
        divisor = 0;

        for(var j = 1; j <= i; j++) {

            if(i % j == 0) {
                divisor++;
            }        

        }

        if(divisor <= 2) {
            salida += i + " ";
        }
    }

    alert(salida);
}

//Ejercicio11
//Visualizar los N primeros números primos, su suma y su media
function ejer11() {
    var n = prompt("Ingrese el numero: ");
    var suma = 0;
    var salida = "";
    var cont = 2;

    while(cont <= n) {

        for(var i = 2; i <= )

        cont++;
    }

    for (var i = 1; i <= n; i++) {
        divisor = 0;

        for(var j = 1; j <= i; j++) {

            if(i % j == 0) {
                divisor++;
            }        
            
        }

        if(divisor <= 2) {
            suma += i;
            salida += i + " ";
        }
    }

    alert("Numeros: " + salida + "\nSuma: " + suma + "\nMedia: " + (suma/2));
}

//Ejercicio12
//Visualizar la media de una secuencia de números introducidos por el usuario. Para
//saber cuándo finalizar se introduce un *
function ejer12() {
    var n = prompt("Ingrese un numero: ");
    var suma = 0;
    var media = 0;
    var salida = "";

    while(n != "*") {
        var n1 = parseInt(n);

        media++;
        suma += n1;
        salida += n1 + " ";
        alert("Numeros: " + salida + "\nSuma: " + suma + "\nMedia: " + (suma/media));

        n = prompt("Ingrese otro numero: ");
    }
}

//Ejercicio13
//El 12 pero visualizar en diferentes líneas los números introducidos por el usuario y su
//media.
function ejer13() {
    var n = prompt("Ingrese un numero: ");
    var suma = 0;
    var media = 0;
    var salida = "";

    while(n != "*") {
        var n1 = parseInt(n);

        media++;
        suma += n1;
        salida += n1 + " ";
        alert("Numeros: " + "\nSuma: " + suma + "\nMedia: " + (suma/media));

        n = prompt("Ingrese otro numero: ");
    }
}

//Ejercicio14
//
function ejer14() {
    
}

//Ejercicio15
//Visualizar los N primero términos de la sucesión de Fibonacci.
function ejer15() {
    var n = prompt("Ingrese numero: ");
    var numeros = [];
    numeros[0] = 0;
    numeros[1] = 1;

    for(let i = 2; i < n; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }

    alert(numeros);
}
//Ejercicio16
// Visualizar si un número N pertenece a la sucesión de Fibonacci.
function ejer16() {
    var n = prompt("Ingrese un numero: ");
    var n1 = parseInt(n);
    var numeros = [];
    var ini = 2;
    var pertenece = false;
    numeros[0] = 0;
    numeros[1] = 1;
    numeros[ini] = numeros[ini - 2] + numeros[ini -1]

    while(numeros[ini] <= n1) {
        ini++
        numeros[ini] = numeros[ini - 2] + numeros[ini -1];
    }

    numeros.forEach(element => {
        if(element == n1) {
            pertenece = true;
        }
    });

    if (pertenece) {
        alert("Pertenece a la sucesion");
    } else {
        alert("NO pertenece");
    }

    
}
//Ejercicio17
//Visualizar la posición que ocupa un número N en la sucesión de Fibonacci
function ejer17() {
    var n = prompt("Ingrese un numero: ");
    var n1 = parseInt(n);
    var numeros = [];
    var ini = 2;
    var pertenece = false;
    numeros[0] = 0;
    numeros[1] = 1;
    numeros[ini] = numeros[ini - 2] + numeros[ini -1]

    while(numeros[ini] <= n1) {
        ini++
        numeros[ini] = numeros[ini - 2] + numeros[ini -1];
    }

    numeros.forEach(element => {
        if(element == n1) {
            pertenece = true;
            alert(numeros.indexOf(element));
        }
    });

    if(pertenece == false) {
        alert("El numero no pertence a la sucesion");
    }
}
//Ejercicio18
//Visualizar los términos anterior y posterior a un número N en la sucesión de Fibonacci
function ejer18() {
    var n = prompt("Ingrese un numero: ");
    var n1 = parseInt(n);
    var numeros = [];
    var ini = 2;
    var pertenece = false;
    numeros[0] = 0;
    numeros[1] = 1;
    numeros[ini] = numeros[ini - 2] + numeros[ini -1]

    while(numeros[ini] <= n1) {
        ini++
        numeros[ini] = numeros[ini - 2] + numeros[ini -1];
    }

    numeros.forEach(element => {
        if(element == n1) {
            pertenece = true;
            alert("Anterior: " + numeros[numeros.indexOf(element) - 1] + "\nPosterior: " + numeros[numeros.indexOf(element) + 1]);
        }
    });

    if(pertenece == false) {
        alert("El numero no pertence a la sucesion");
    }
}