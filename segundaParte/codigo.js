//almacena todos los jugadores que formarán los equipos
//cada fila de la tabla contiene los datos de un jugador
//los datos de cada jugador son:
//  nombre
//  DNI
//  fecha de nacimiento (con formato yyyy,mmm,dd)
//  booleano (que indica si es Capitán de equipo
import("libreria.js");

var numeroAñadidos = 0;
window.addEventListener("load", carga, false);

function carga() {
    
    
    
    var jugadores = [
        ["Liria Gómez", "11111111A", "2000,feb,28", true],
        ["Eloy Vázquez", "12111111A", "2003,mar,23", false],
        ["Adrián Gómez", "11311111A", "2004,abr,22", false],
        ["Josué Dopico", "11141111A", "2001,oct,21", true],
        ["Alberto Vázquez", "11115111A", "1999,jun,10", true],
        ["Iván Morgade", "11111611A", "2000,abr,30", false],
        ["Óscar González", "11111171A", "2001,jun,1", false],
        ["Diego Oliveira", "11111118A", "2002,may,2", true],
        ["Diego García", "21111111A", "2002,abr,28", false],
        ["Juanjo Dapena", "31111111A", "2003,oct,24", false],
        ["Iago Aguilar", "41111111A", "2003,abr,25", true],
        ["Borja Ferreiro", "51111111A", "2000,may,27", false],
        ["Daniel Gil", "61111111A", "2001,abr,28", false],
        ["Xián García", "71111111A", "2001,abr,20", false],
        ["Pablo Guzmán", "81111111A", "2000,jun,18", false],
        ["Alexis Martínez", "91111111A", "2000,abr,11", false],
        ["Iván Rodríguez", "11311111A", "2004,jun,22", false],
        ["Erik Yáñez", "1141111A", "2004,may,28", false],
        ["Mikael Prada", "11511111A", "2000,abr,11", false],
        ["Miguel Calleja", "16111111A", "2000,ene,15", false],
    ];

    var nombresEquipos = [
        "Los invencibles",
        "Los terremotos",
        "Los grandes reservas",
        "Los tira y afloja",
        "Los que van y no vuelven",
        "Los que no fían",
        "Los vete tú a saber por qué están aquí",
        "Los de aquí y los de allá",
        "Los ancianos",
        "Los tramposos",
    ];
    var equiposArr = [];

    var lista = document.getElementById("lista")
    var equipos = document.getElementById("equipos");
    var info = document.getElementById("info");
    var selectLista = document.createElement("select");
    selectLista.addEventListener("click", añadirJugadorEquipo(), false);
    var labelLista = document.createElement("label");
    var count = 0;

    selectLista.setAttribute("id", "lista");

    labelLista.setAttribute("for", "lista");
    labelLista.textContent = "Lista de jugadores";

    lista.append(labelLista);
    lista.append(selectLista);

    //objeto de usuario
    //almacena los datos de un equipo
    function Equipo(nombre, capitan, jugadores) {
        //propiedades
        this.nombre = nombre || "";
        this.capitan = capitan || "";
        //se almacenarán los datos que provienen del array de personas
        this.jugadores = [] || jugadores.concat([]);
        //métodos
        //añadir un jugador a la lista de jugadores de este equipo
        //recibe
        //  jugador- array con los datos de un jugador en el mismo formato que el array jugadores
        this.addJugador = function (jugador) {
            this.jugadores.push(jugador);
        };
        //calcula la edad media aproximada de los jugadores de este equipo teniendo en cuenta para el cálculo solo el año de nacimiento
        this.calcularMediaEdad = function () {
            let sumaAnos = 0;
            let anoActual = new Date().getFullYear();
            //recorremos jugadores
            for (let nJug = 0; nJug < this.jugadores.length; nJug++) {
                //sumo los años
                sumaAnos += +this.jugadores[nJug][2].split(",")[0];
            }
            return anoActual - sumaAnos / this.jugadores.length;
        };
    }

    function cargaJugadores() {
        jugadores.forEach((element) => {
            if (!element[3]) {
                let nombre = element[0];
                let dni = element[1];
                let nombreDni = nombre + "," + dni;

                let texto = document.createTextNode(nombreDni);
                let option = document.createElement("option");

                option.setAttribute(
                    "title",
                    "El jugador que escojas con clic se irá al Equipo"
                );


                option.appendChild(texto);
                selectLista.append(option);
            }
        });
    }

    function cargaCapitanes() {
        let count = 0;
        jugadores.forEach((element) => {
            if (element[3]) {
                creaTablaEquipos(count, element);
                count++;
            }
        });
    }

    function creaTablaEquipos(numero, element) {
        let caption = document.createElement("caption");
        caption.textContent = nombresEquipos[numero];

        let equipo = new Equipo(nombresEquipos[numero], element[0]);
        equipo.addJugador(element);

        equiposArr.push(equipo);

        let table = document.createElement("table");
        table.append(caption);

        equipos.append(table);

        let trTitulo = document.createElement("tr");
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdDni = document.createElement("td");
        let tdFecha = document.createElement("td");
        let thNombre = document.createElement("th");
        let thDni = document.createElement("th");
        let thFecha = document.createElement("th");

        thNombre.textContent = "Nombre";
        thDni.textContent = "DNI";
        thFecha.textContent = "Fecha de Nacimiento";
        tdNombre.textContent = element[0];
        tdDni.textContent = element[1];
        tdFecha.textContent = quitarComas(element[2]);
        tr.setAttribute("class", "capitan");

        trTitulo.append(thNombre, thDni, thFecha);
        tr.append(tdNombre, tdDni, tdFecha);
        table.append(trTitulo, tr);

    }

    
    cargaJugadores();
    cargaCapitanes();

    function añadirJugadorEquipo() {
        console.log("hola");
        /*let seleccion = selectLista.selectedOptions;

        let equipo = equiposArr[numeroAñadidos];
        //equipo.addJugador(seleccion);

        if (numeroAñadidos == equiposArr.length - 1) {
            numeroAñadidos = 0;
        } else {
            numeroAñadidos++;
        }*/
    }


    console.log(equiposArr);
}
