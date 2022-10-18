var nombres = new Array("Jose","Maria","Juan","Gerardo","David","Victor","Veronica","Atena","Astrid","Marcos","Valeria","Eileen","Diego","Raul","Joseph","Ismael","Samuel","Ana", "Maria", "Clara");
var edades = new Array(12, 30, 1, 56, 21, 44, 23, 98, 89, 5, 6, 7, 12, 58, 75, 46, 32, 24, 8, 9);
var salida = "";

for(let i = 0; i < 20; i++) {
    for(let j = i; j < 20; j++) {
        if(edades[i] > edades[j]) {
            var temp1 = edades[i];
            var temp2 =  nombres[i];
            edades[i] = edades[j]
            edades[j] = temp1;
            nombres[i] = nombres[j];
            nombres[i] = temp2;
        }
    }
}

for(let i = 0; i <= nombres.length - 1; i++) {
    salida += "Nombre: " + nombres[i] + " , Edad: " + edades[i] + "\n";
}

alert(salida);

