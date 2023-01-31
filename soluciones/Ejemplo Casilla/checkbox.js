
function marcar() {
	document.getElementById("verano").checked=true;
	document.getElementById("verano").disabled=false;
}
function desmarcar() {
	document.getElementById("verano").checked=false;
	document.getElementById("verano").disabled=false;
}
function marcarDeshabilitado(){
	document.getElementById("verano").checked=true;
	document.getElementById("verano").disabled=true;
}
function iniciar(){
	document.getElementById("si").addEventListener("click",marcar,false);
	document.getElementById("no").addEventListener("click",desmarcar,false);
	document.getElementById("quizas").addEventListener("click",marcarDeshabilitado,false);
}

//comenzamos controlando la carga del documento
window.addEventListener("load",iniciar,false);