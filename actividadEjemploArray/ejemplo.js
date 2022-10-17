var num = new Array();
var salida = "";
var mayor = 20;
var cont = 0;
var imayor;

while (num.length < 10) {
    var temp = prompt("Ingrese un numero mayor que 20: ");
    if(isNaN(temp)) {
        alert("Tienes que introducir un numero");
    } else if (temp <= 20) {
        alert("Tienes que introducir numeros mayores que 20");
    } else {
        num[cont] = temp;
        if(temp > mayor) {
            mayor = temp;
            imayor = cont;
        }
        cont++;
    }
}
    
salida = "Numero mayor: " + mayor + "\n";
delete num[imayor];

for (var indice in num) {
    salida += num[indice] + " ";
}

alert(salida);

