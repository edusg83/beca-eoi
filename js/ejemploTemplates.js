let arrayEjemplo=[{
    "id":"1",
    "tarjeta":"123141241",
    "propietario":"Propietario de tarjeta 1"
},
{
    "id":"2",
    "tarjeta":"12412451",
    "propietario":"Propietario de tarjeta 2"
},
{
    "id":"3",
    "tarjeta":"13645347",
    "propietario":"Propietario de tarjeta 3"
}];

let tabla = `<table id="dataTable">
<thead>
<tr>
<th>Id</th>
<th>Tarjeta</th>
<th>Propietario</th>
</tr>
</thead>
<tbody>`;

let finTabla=`</tbody>
</table>`;

let filas=``;

arrayEjemplo.forEach(item=>{

filas+=`<tr>
<td>${item.id}</td>
<td>${item.tarjeta}</td>
<td>${item.propietario}</td>
</tr>
`;
});

tabla+=filas+finTabla;
document.getElementById("resultados").innerHTML = tabla;
