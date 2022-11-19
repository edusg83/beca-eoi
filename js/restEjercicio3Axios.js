const urlUsers = "https://j4jjw.mocklab.io/usersDataList";

axios.get(urlUsers,{})
    .then((respuestaUsuarios)=> {
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
    <td>${item.nombre}</td>
    <td>${item.poblacion}</td>
</tr>`;
});

tabla += filas+finTabla;
document.getElementById("parrafoCard").innerHTML ="Las direcciones de " + nombre1 + " " + apellidos1 + " son: ";


})