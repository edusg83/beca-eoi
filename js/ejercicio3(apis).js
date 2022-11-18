const request = new Request('https://j4jjw.mocklab.io/usersDataList');
var respuesta;
var datosUsuario=[];

fetch(request)
.then(response=>response.json())
.then(data => {
    respuesta = data.arrayUsuarios[0];
    var nombre = "Nombre: " + respuesta.nombre;
    document.getElementById("nombre").innerHTML=nombre;
    var apellidos = "Apellidos: " + respuesta.apellidos;
    document.getElementById("apellidos").innerHTML=apellidos;
   
    let tabla = `<table  class="table">
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



respuesta.direcciones.forEach(item=>{

    filas+=`<tr>
    <td>${item.nombre}</td>
    <td>${item.poblacion}</td>
    </tr>
    `;
    });

tabla+=filas+finTabla;
document.getElementById("mytable").innerHTML = tabla;
});