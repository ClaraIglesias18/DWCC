var textoPatron; //cadena de texto que contendrá la expresión regular
var expRegular; //variable que almacenará el objeto RegExp 
var hoy; //almacenará el día actual para comprobar que no se pueda introducir una fecha posterior a la actual como fecha de nacimiento
var fechaCumple; //texto que almacenará la fecha de nacimiento en formato dd-mm-aaaa introducida mediante prompt por el usuario
var diaActual;
var mesActual;
var anoActual;
var bisiesto; //almacena true o false dependiendo del resultado que devuelva la llamada a la función pasándole el año de nacimiento
var diaNac;
var mesNac;
var anoNac;
var textoAnoAct;//el año actual en texto
var patron28; //para los patrones según el número de días
var patron29;
var patron30;
var patron31;
var patronMes; //valido para todos los meses
var patronFeb; //valido para febrero 
var patronMes30; //valido para todos los meses excepto febrero
var patronMes31; //valido para los meses de 31 días
var patronAnoActual;
var millarAno;  //para almacenar el millar del año 
var centenaAno; //para almacenar la centena del año actual
var decenaAno;
var unidadAno;
var patronMillar;  //para cuando la fecha de nacimiento está en 1??? y el año es 2???
var patronCentena; //para cuando la fecha de nacimiento está en 1??? y el año es 2???
var patronDecena;  //para cuando la fecha de nacimiento está en 1??? y el año es 2???
				   //y para cuando la fecha nacimiento es 20?? y el año es 20??
var patronUnidad;  //para cuando la fecha de nacimiento está en 1??? y el año es 2???
				   //y para cuando la fecha nacimiento es 20?? y el año es 20??
var diasSemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
hoy=new Date();
fechaCumple=prompt("Introduce tu fecha de nacimiento con el formato dd-mm-aaaa");

//supondremos que la fecha se introduce correctamente (respetando el formato)

//obtenemos dia, mes y año de la fecha de nacimiento
diaNac=parseInt(fechaCumple.split("-")[0]);
mesNac=parseInt(fechaCumple.split("-")[1])-1; //le restamos 1 porque los meses en la fecha comienzan en 0
anoNac=parseInt(fechaCumple.split("-")[2]);

//miro si el año en que nacio fue bisiesto
bisiesto=esBisiesto(anoNac);

//obtenemos dia, mes y año del día actual
diaActual=hoy.getDate();
mesActual=hoy.getMonth();
anoActual=hoy.getFullYear();

//obtenemos cada dígito del año actual y lo convertimos a numérico
textoAnoAct=""+anoActual;
millarAno=+textoAnoAct[0];
centenaAno=+textoAnoAct[1];
decenaAno=+textoAnoAct[2];
unidadAno=+textoAnoAct[3];

//construimos el patrón que me permite validar los días que tiene cada mes
patron28="((0?[1-9])|(1\\d)|(2[0-8]))";  //admite números del 01 al 28 o del 1 al 28 sin 0 a la izquierda
patron29="((0?[1-9])|([12]\\d))";    //admite números del 01 al 29 o del 1 al 29 sin 0 a la izquierda
patron30="((0?[1-9])|([12]\\d)|(30))"; //admite números del 01 al 30 o del 1 al 30 sin 0 a la izquierda
patron31="((0?[1-9])|([12]\\d)|(3[01]))";//admite números del 01 al 31 o del 1 al 31 sin 0 a la izquierda

patronMes="(0?[2-9]|1[012]?)"; //admite números del 1 al 12 que son números de meses
patronFeb="0?2";
patronMes30="(0?[3-9]|1[012]?)"; //todos los números de meses menos febrero
patronMes31="(1[02]?|0?[13578])"; //solo los meses de 31 días 


//establezco los patrones de las centenas, decenas y unidades del año en función del año actual
if (millarAno>parseInt(anoNac/1000)){ //si nació en otro milenio. Ej nació en 1987 y estamos en 2022
    patronMillar="["+(""+anoNac)[0]+"-"+millarAno+"]"; //entre el millar del año de la fecha de nacimiento y el actual
	patronCentena="\\d"; //cualquier dígito
	patronDecena="\\d";
	patronUnidad="\\d";
} else { //nación en el mismo milenio. ej: nacio en 2003 y estamos a 2022
	patronMillar=millarAno;
    patronCentena="[0-"+centenaAno+"]"; //al ser el mismo millar la centena va de 0 a la centena actual
    if (centenaAno>parseInt((""+anoNac)[1])) {//si la centena es mayor que la centena de nacimiento 1950 y 1875
        patronDecena="\\d";
        patronUnidad="\\d";
    }
    else {
        patronDecena="[0-"+decenaAno+"]";
        if (decenaAno>parseInt((""+anoNac)[2])){
            patronUnidad="\\d";
        } else {
            patronUnidad="[0-"+unidadAno+"]";
        }
    }
}

//completamos el patron que deberá cumplir el año de la fecha de nacimiento para no admitir en la fecha de nacimiento años superiores al actual
//damos por supuesto que nadie que ejecute este algoritmo ha nacido antes del año 1000
patronAnoActual="[1-"+millarAno+"]"+patronCentena+patronDecena+patronUnidad;


//patronAnoActual=anoActual;

//completamos el patrón de toda la fecha
//tenemos en cuenta si la fecha de nacimiento fue en un año bisiesto y su mes de nacimiento es el 2 para controlar el contenido del patrón

if (mesNac==1) { //es febrero
    if (bisiesto){
        textoPatron="^"+patron29+"-"+patronFeb+"-"+patronAnoActual+"$";
    } else {
        textoPatron="^"+patron28+"-"+patronFeb+"-"+patronAnoActual+"$";
    }
} else if (esMesDe30(mesNac)){
    textoPatron="^"+patron30+"-"+patronMes30+"-"+patronAnoActual+"$";   
} else {
    textoPatron="^"+patron31+"-"+patronMes31+"-"+patronAnoActual+"$";
}

console.log(textoPatron);

//construimos la expresion regular como un objeto RegExp
expRegular=new RegExp(textoPatron);
console.log(expRegular.test(fechaCumple));

//comprobamos si la fecha de nacimiento introducida es correcta según el patrón
if (expRegular.test(fechaCumple)){
    //aquí averiguamos qúe día de la semana caerá su cumple
    alert("tu próximo cumpleaños caéra en "+diasSemana[diaSemana(fechaCumple)]);
} else{
    alert("La fecha introducida (" + fechaCumple+ ") no es correcta.\nComprueba que el día, el mes y el año son correctos, están separados por guiones y no contienen caracteres adicionales, la fecha no es superior al año día actual y el nº de día es correcto para el mes escrito.");
}

//función que recibe una texto fecha y devuelve el día de la semana de su nacimiento
//recibe
//  fecha- texto en formato [d]d-[m]m-aaaa
//retorna
//  diaSem- número del 0 al 6 siendo (0-domingo, 1-lunes, etc...)
function diaSemana(fecha){
    let diaSem;
    let hoy=new Date();
    //obtenemos dia, mes y año de la fecha de nacimiento
    let diaNac=+(fecha.split("-")[0]);
    let mesNac=+(fecha.split("-")[1])-1; //le restamos 1 porque los meses en la fecha comienzan en 0
    let anoNac=+(fecha.split("-")[2]);
    //obtenemos dia, mes y año del día actual
    let diaActual=hoy.getDate();
    let mesActual=hoy.getMonth();
    let anoActual=hoy.getFullYear();
    let diaCumple;
    let anoCumple;
    let fechaCumple;
    if (mesNac>mesActual) { 
        anoCumple=anoActual;
    }else {
        anoCumple=anoActual+1;
    }
    if ((mesNac==1)&&(diaNac==29)&&!esBisiesto(anoCumple)) {
        diaCumple=28;  
    } else {
        //puede ser que no haya nacido en febrero
        //puede ser que fuera febrero pero no fuera en 29
        //puede ser que sea bisiesto el año actual donde voy a cumplir años
        diaCumple=diaNac;
    }
    fechaCumple=new Date(anoCumple,mesNac,diaCumple);
    diaSem=fechaCumple.getDay();
    return diaSem;
}

// Función que determina si un año es bisiesto o no
// recibe 
//  ano un número de 4 dígitos
// retorna
//  true si es bisiesto y false en caso contrario
function esBisiesto(ano) {
	return ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0;
}
    
// función que dice si un mes es de 30 días
// recibe
//   nMes -un número de uno o 2 dígitos (0 es enero, 1 es febrero,...)
//retorna
//   true si se trata de un mes de 30 días y false en caso contrario
function esMesDe30(nMes) {
    return nMes==3 || nMes==5 || nMes==8 || nMes==10;
}