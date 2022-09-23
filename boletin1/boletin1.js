//Ejercicio1
function ejer1() {
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
}

//Ejercicio2
function ejer2() {
    for (let i = 1; i <= 20; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

//Ejercicio3
function ejer3() {
    var suma = 0;

    for (let i = 0; i < 10; i++ ){
        suma += i;
    }

    console.log(suma/10);
}

//Ejercicio4
function ejer4() {
    var n = prompt("Ingresa el numero limite: ");
    
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

//Ejercicio5
function ejer5() {
    var n = prompt("Ingresa el numero limite: ");
    var suma = 0;

    for(let i = 0; i < n; i++) {
        suma += i;
    }

    console.log(suma);
}

//Ejercicio6
function ejer6() {
    var n = prompt("Ingresa el numero limite: ");
    var suma = 0;

    for(let i = 0; i < n; i++) {
        suma += i;
    }

    console.log(suma/n);
}

//Ejercicio7
function ejer7() {
    var n = prompt("Ingresa el numero limite: ");
    var suma = 0;

    console.log("Numeros dados: ")
    for(let i = 0; i < n; i++) {
        suma += i;
        console.log(i);
    }

    console.log("Suma de los numeros: " + suma);
    console.log("Media de los numeros: " + (suma/n));
}

//Ejercicio8
function ejer8() {
    var n = 327;
    var divisor = 0;

    for(let i = 2; i <= n; i++) {

        if(n % i == 0) {
            divisor++;
        }        
    
    }

    if(divisor > 2) {
        console.log("El numero no es primo");
    } else {
        console.log("El numero es primo");
    }
}

//Ejercicio9
function ejer9() {
    var n = prompt("Ingresa el numero: ");
    var divisor = 0;

    for(let i = 1; i <= n; i++){

        if(n % i == 0) {
            divisor++;
        }

    }

    if(divisor > 2) {
        console.log("El numero no es primo");
    } else {
        console.log("El numero es primo");
    }
}

//Ejercicio10
function ejer10() {
    for (var i = 1; i <= 10; i++) {
        divisor = 0;

        for(var j = 1; j <= i; j++) {

            if(i % j == 0) {
                divisor++;
            }        

        }

        if(divisor <= 2) {
            console.log(i);
        }
    }
}

//Ejercicio11
function ejer11() {
    var n = prompt("Ingrese el numero: ");
    var suma = 0;
    
    for (var i = 1; i <= n; i++) {
        divisor = 0;

        for(var j = 1; j <= i; j++) {

            if(i % j == 0) {
                divisor++;
            }        
            
        }

        if(divisor <= 2) {
            suma += i;
            console.log(i);
        }
    }

    console.log("Suma: " + suma);
    console.log("Media: " + (suma/2));
}

//Ejercicio12
function ejer12() {
    var n = prompt("Ingrese un numero: ");
    var suma = 0;
    var media = 0;

    while(n != "*") {
        var n1 = parseInt(n);

        media++;
        suma += n1;
        console.log("Suma: " + suma);
        console.log("Media: " + (suma/media));

        n = prompt("Ingrese otro numero: ");
    }
}

//Ejercicio13
function ejer13() {
    var n = prompt("Ingrese un numero: ");
    var suma = 0;
    var media = 0;

    while(n != "*") {
        var n1 = parseInt(n);

        media++;
        suma += n1;
        console.log("Suma: " + suma);
        console.log("Media: " + (suma/media));

        n = prompt("Ingrese otro numero: ");
    }
}

//Ejercicio14
function ejer14() {
    //mirar inclusion de archivos
}

//Ejercicio15
function ejer15() {
    
}
//Ejercicio16
function ejer16() {
    
}
//Ejercicio17
function ejer17() {
    
}
//Ejercicio18
function ejer18() {
    
}