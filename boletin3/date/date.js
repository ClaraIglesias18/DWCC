var entrada = prompt("Introduce la fecha de tu nacimiento (dd-mm-aaaa): ");



var año = 1988;
var mes = 7;
var dia = 4;
var dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

var fechaAct = new Date();
var añoAct = fechaAct.getFullYear();

var proximoCump = new Date(añoAct, mes - 1, dia);

if (proximoCump < fechaAct) {
    proximoCump.setFullYear(añoAct + 1);
}

var diaSemana = proximoCump.getDay();

alert(dias[diaSemana]);
