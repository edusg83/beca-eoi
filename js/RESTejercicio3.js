
/*
let arrayEjemplo = [{
    "id":"1",
    "tarjeta":"1111 2222 3333 4444",
    "propietario":"Propietario 1"
},
{
    "id":"2",
    "tarjeta":"5555 6666 7777 8888",
    "propietario":"Propietario 2"
},
{
    "id":"3",
    "tarjeta":"9999 1010 1111 1212",
    "propietario":"Propietario 3"
}];
*/

var arrayUsuarios = null;

const request = new Request("https://j4jjw.mocklab.io/usersDataList");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => { 
        usuario = data.arrayUsuarios[0];
        console.log(usuario.direcciones);
        cartaResultados(usuario);
        tablaDirecciones(usuario);
    });




function cartaResultados (usuario){
    let card = ` <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${usuario.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${usuario.apellidos}</h6>
            <p class="card-text", id = "textoCarta"></p>
        </div>
    </div>`;

    document.getElementById("resultados").innerHTML = card;
}


function tablaDirecciones(usuario){
    let direcciones = usuario.direcciones;

    let tabla = `<table id="dataTable">
    <thead>
        <tr>
            <th>Dirección</th>
            <th>Población</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    
    let filas=``;
    
    direcciones.forEach(item => {
    filas+=`
        <tr>
            <td>${item.nombre}</td>
            <td>${item.poblacion}</td>
        </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("textoCarta").innerHTML = tabla;
}


