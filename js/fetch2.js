let usersArray=[{
    "nombre":"Oscar",
    "apellidos":"Martinez Orts",
    "direccion":"C/Segura 14"
},
{
    "nombre":"Alejandro",
    "apellidos":"Marcs Orts",
    "direccion":"C/Segura 13" 
},
{
    "nombre":"Pablor",
    "apellidos":"Martinez Pelayo",
    "direccion":"C/Segura 12"
}];

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