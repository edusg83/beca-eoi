const request = 'https://j4jjw.mocklab.io/users';
var usersArray;
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

axios.get(request)
    .then((data) => {
        usersArray = data.data.arrayUsuarios; 

        let tabla = `<table id = "table">
<thead>
    <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Direccion</th>
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
        <td>${item.direccion}</td>
    </tr>`;    
});
tabla+=filas+finTabla;
document.getElementById("resultado").innerHTML=tabla;
    });



