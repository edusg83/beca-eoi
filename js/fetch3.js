const request = new Request('https://j4jjw.mocklab.io/usersDataList');
var usersArray;
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => {
        usersArrayName = data.arrayUsuarios[0].nombre[0];
        usersArrayApe = data.arrayUsuarios[0].apellidos[0];
        userArrayDirr = data.arrayUsuarios[0].direcciones[0];
        usersArray = usersArrayName + usersArrayApe + usersArrayDirr;

        let tabla = `<table id = "table">
<thead>
    <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Direcciones</th>
    </tr>
</thead>
<tbody>`;

let finTabla=`</tbody>
    </table>`;

let filas=``;

usersArray.forEach(item => {
    filas+=`
    <tr>
        <td>${item.nombre}</td>
        <td>${item.apellidos}</td>
        <td>${item.direcciones}</td>
    </tr>`;    
});

tabla+=filas+finTabla;
document.getElementById("resultado").innerHTML=tabla;
    });