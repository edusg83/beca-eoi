const request = "https://j4jjw.mocklab.io/users";

var datos
axios.get(request)
  .then(data => {

    let tabla = `<table id="dataTable">
    <thead>
      <tr>
        <th>Id</th>
        <th>Tarjeta</th>
        <th>Propietario</th>
      </tr>
    </thead>
    <tbody>`;

    let finTabla = `</tbody>
      </table>`;

    let filas = ``;

    data.data.arrayUsuarios.forEach(item => {
      filas+=`
    <tr>
      <td>${item.nombre}</td>
      <td>${item.apellidos}</td>
      <td>${item.direccion}</td>
    </tr>`
    });

    tabla+=filas+finTabla;

    document.getElementById("resultados").innerHTML = tabla;
    
});