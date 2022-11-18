const request = new Request('https://j4jjw.mocklab.io/usersDataList');
var usersArray;
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response => response.json())
    .then(data => {
        usersArrayName = data.arrayUsuarios[0].nombre;
        usersArrayApe = data.arrayUsuarios[0].apellidos;
        userArrayDirr = data.arrayUsuarios[0].direcciones;
        

        let tabla = `<table id = "table">
<thead>
    <tr>
        <th>Nombre</th>
        <th>Poblacion</th>
       
    </tr>
</thead>
<tbody>`;

let finTabla=`</tbody>
    </table>`;

let filas=``;

userArrayDirr.forEach(item => {
    filas+=`
    <tr>
        <td>${item.nombre}</td>
        <td>${item.poblacion}</td>
    </tr>`;    
});

tabla+=filas+finTabla;
document.getElementById("nombre").innerHTML = usersArrayName;
document.getElementById("apellidos").innerHTML = usersArrayApe;
document.getElementById("resultado").innerHTML=tabla;
    });