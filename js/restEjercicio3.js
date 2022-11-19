const request = new Request("https://j4jjw.mocklab.io/usersDataList");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
    .then(response=> response.json())
    .then(data=> {
        var nombre1 = data.arrayUsuarios[0].nombre;
        var apellidos1 = data.arrayUsuarios[0].apellidos;
        var direcciones1 = data.arrayUsuarios[0].direcciones;
        
let tabla = `<table id="dataTable">
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

direcciones1.forEach(item => {
filas+=`
<tr>
    <td class="col">${item.nombre}</td>
    <td class="col">${item.poblacion}</td>
</tr>`;
});

tabla += filas+finTabla;
document.getElementById("parrafoCard").innerHTML ="Las direcciones de <b>" + nombre1 + " " + apellidos1 + "</b> son: ";
document.getElementById("parrafoTable").innerHTML = tabla;

});
