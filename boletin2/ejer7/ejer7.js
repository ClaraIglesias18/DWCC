function mayor(n1, n2) {
    let mayor;
    if(n1 > n2) {
        mayor = n1;
    } else if(n2 > n1) {
        mayor = n2;
    } else {
        mayor = "Los numeros son iguales";
    }
    return mayor;
}

var n1 = prompt("Dime el primer numero: ");
var n2 = prompt("Dime el segundo numero: ");
alert(mayor(n1, n2));
