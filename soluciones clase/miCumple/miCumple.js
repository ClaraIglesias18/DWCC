//función que dice si un año es bisiesto
//entrada
//	ano - los 4 dígitos del año a valorar
//retorna
//	true si el año es bisiesto
//	false si el año no es bisiesto
function esBisiesto(ano){
	return ((ano%4==0) && (ano%100!=0)) || (ano%400==0); //un año es bisiesto si es divisible por 4 pero no es divisible por 100 o bien si es divisible por 400
}


//función que me dice si una fecha de la que sabemos el dia, mes y año es posterior a la fecha actual
//entrada
//	dia- número entero entre 1 y 31
//	mes- número entero entre 0 y 11
//	año- número entero de 1000 en adelante
//retorna
//	true si la fecha corresponde a un día posterior a la fecha actual
//	false en caso contrario
function esPosteriorAFechaActual(dia,mes,ano){
	let hoy=new Date();
	let diaHoy=hoy.getDate();
	let mesHoy=hoy.getMonth();
	let anoHoy=hoy.getFullYear();
	if (ano<anoHoy) return false; //nací en un año anterior al actual
	if (ano==anoHoy){
		if (mes<mesHoy) return false; //nací en el año actual pero en un mes anterior
		if (mes==mesHoy){
			if (dia<diaHoy) return false; //nací en el año y mes actuales pero en un día anterior
            //es el mismo año y mes que el actual pero el dia es superior al actual
		} 
        //es el mismo año que el actual pero el mes es superio al actual
	} 
    //el año es superior al actual
	return true; //todos los demás casos son fechas posteriores a la actual	
}

//función que dice si una fecha introducida con el formato dd-mm-aaaa es correcta
//entrada 
//	textoFecha- fecha en formato dd-mm-aaaa
//retorna
//	true si se corresponde con una fecha correcta con el formato correcto
//	false en caso contrario
function esFormatoCorrecto(textoFecha){
	let dia;
	let mes;
	let ano;
	let trozos=textoFecha.split("-"); //desconpongo en el texto partiéndolo por el - para coger las diferentes partes de la fecha
	if (trozos.length!=3) return false; //si se ha creado un array de diferente longitud a 3 es que o bien faltan datos o he puesto de más (Ej: 5-8 o bien, 5-8-2000-3)
	dia=trozos[0]; //obtengo la parte correspondiente al día
	mes=trozos[1]; //obtengo la parte correspondiente al  mes
	ano=trozos[2]; //obtengo la parte correspondiente al  año
	if ((dia.length<1)||(dia.length>2)) return false; //con la parte correspondiente al día la longitud tiene que ser 1 o 2
	if ((mes.length<1)||(mes.length>2)) return false; //lo mismo pasa con el mes
	if ((ano.length!=4)||(parseInt(ano)!=ano)) return false; //en el caso del año la longitud tiene que ser de 4 obligatoriamente. Quedan descartados los años 0000 a 0999
	return true; //solo llegarían aquí años superiores o iguales a 1000 que me permite averiguar la fecha de nacimiento de personas que puedan tener 1020 años (casos imposibles)

} 

//función que indica si una fecha es correcta
//entrada
//	dia- número de 1 o 2 dígitos
//	mes - número de 1 o 2 dígitos
//	ano - número de 4 dígitos
//retorna
//	true si la fecha es correcta
//	false en caso contrario
function  esCorrectaFecha(dia,mes,ano){
	let diasMes=[31,29,31,30,31,30,31,31,30,31,30,31]; //nº de días que puede tener como máximo cada mes
	if ((dia<1)||(dia>31)) return false; //el día tiene que estar comprendido entre 1 y 31
	if ((mes<0)||(mes>11)) return false; //el mes tiene que estar comprendido entre 0 y 11
	if ((ano<1)) return false; //son datos incorrectos 
	if (dia>diasMes[mes]) return false; //el día no es válido para el mes en el que estoy.
	if ((mes==2)&&(dia==29)&&!esBisiesto(ano)) return false; //si estoy en febrero y he puesto el día 29 en un año que no es bisiesto no es válido
	return true; //la fecha es correcta si no salió por ninguna de las condiciones anteriores
}

//función que indica si cumple con el formato dd-mm-aaa en cuanto a que d,ma son dígitos numéricos
//entrada
//	textoFecha - un texto que deberia tener el formato d[d]-m[m]-aaaa
//retorna
//	true si la fecha es correcta
//	false en caso contrario
function esFormatoFecha(textoFecha){
    let patronFecha=/^\d{1,2}-\d{1,2}-\d{4}$/;
    return patronFecha.test(textoFecha);
}

//29-2-2000

var diasSemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var dia;
var mes;
var ano;
var miFechaNac=prompt("Introduce la fecha de tu nacimiento con del formato dd-mm-aaaa.\nLos ceros a la izquierda se pueden omitir.\nEl año tiene que ser superior o igual a 1000");
var miProximoCumple;
var hoy=new Date();
var diaHoy=hoy.getDate();
var mesHoy=hoy.getMonth();
var anoHoy=hoy.getFullYear();

if (miFechaNac!=null){ //comprobamos si pulso cancelar porque no se puede hacer un trim de un null
	miFechaNac=miFechaNac.trim(); //por si se nos coló algún blanco antes o después de la fecha, se los quitamos
    if (esFormatoFecha(miFechaNac)) { //en lugar de la que está comentada debajo que no utiliza patrones
        //if (esFormatoCorrecto(miFechaNac)){ //comprobamos si cumple con el formato
            //descompongo la fecha en su día, mes y año-
            dia=parseInt(miFechaNac.split("-")[0]);
            mes=parseInt(miFechaNac.split("-")[1])-1; //le resto 1 por que el usuario introduce 1 para enero pero para javascript enero es el mes 0
            ano=parseInt(miFechaNac.split("-")[2]); //si se metió 10-10-400s cumple con el formato pero no es un año valido

            if (esCorrectaFecha(dia,mes,ano)) {
                if (!esPosteriorAFechaActual(dia,mes,ano)){
                    //la fecha es una fecha anterior a la actual puedo calcular el día de la semana en el que cayó la fecha de nacimiento
                    let fechaNacimiento=new Date(ano,mes,dia);
                    alert("Naciste un "+diasSemana[fechaNacimiento.getDay()]);

                    //y si queremos saber en qué día caerá nuestro próximo cumpleaños
                    //primero tengo que saber si según la fecha actual mi cumpleaños todavía no ha pasado en este año o si ya pasó y es el año que viene
                    if ((mes>mesHoy)||(mesHoy==mes)&&(dia>diaHoy)) { //mi cumple todavía no ha llegado en este año-
                        //miro si mi cumpleera el 29 de febrero y estamos en un año bisiesto
                        if ((mes==1)&&(dia==29)&&!esBisiesto(anoHoy)) dia=28;
                        alert("Tu próximo cumpleaños caerá en "+diasSemana[(new Date(anoHoy,mes,dia)).getDay()]);	
                    } else {
                        //si nació en un año bisiesto el 29 de febrero su cumpleaños será el 28 de febrero y no el 1 de marzo, salvo que el año de su cumple sea bisiesto
                        if ((mes==1)&&(dia==29)&&!esBisiesto(anoHoy+1)) dia=28;
                        alert("Tu próximo cumpleaños caerá en "+diasSemana[(new Date(anoHoy+1,mes,dia)).getDay()]);	
                    }
                } else {
                    alert("La fecha introducida: "+miFechaNac+" es posterior al día actual");
                }
            } else {
                alert("La fecha introducida: "+miFechaNac+" no es correcta");
            }
        /*
        } else {
            alert("La fecha introducida: "+miFechaNac+" no es una fecha correcta");
        }
        */ //parte de la condicional sustituida por la de validación con patrón
    } else {
        alert("La fecha introducida: "+miFechaNac+" no cumple con el formato dd-mm-aaaa");
    }
} else {
	alert("Has cancelado el programa");
}