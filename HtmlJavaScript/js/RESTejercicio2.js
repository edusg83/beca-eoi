
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

const request = new Request("https://j4jjw.mocklab.io/users");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => { 
        arrayUsuarios = data.arrayUsuarios;
        console.log(arrayUsuarios);
        tablaResultados(arrayUsuarios);
    });



function tablaResultados (array){
    let tabla = `<table id="dataTable">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    
    let filas=``;
    
    array.forEach(item => {
    filas+=`
        <tr>
            <td>${item.nombre}</td>
            <td>${item.apellidos}</td>
            <td>${item.direccion}</td>
        </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
}





