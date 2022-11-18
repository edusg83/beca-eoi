const request = new Request("https://j4jjw.mocklab.io/usersDataList");

var datos
fetch(request)
  .then(response => response.json())
  .then(data => {
    var user1 = data.arrayUsuarios[0]

    let nom = `
    Nombre: ${user1.nombre}<br>
    Apellidos: ${user1.apellidos}<br>

    <table class="text-center bg-personal1 border border-3 border-success">
    <thead class="border border-3 border-success">
      <tr>
        <th class="col-6">Direccion</th>
        <th class="col-6">Localidad</th>
      </tr>
    </thead>
    <tbody>`

    let dir = ``;

    user1.direcciones.forEach(item => {
    dir +=`
    <tr class="border-personal">
      <td>${item.nombre}</td>
      <td>${item.poblacion}</td>
    </tr>`
    });

    let finTabla = `</table>
    </tbody>`;

    var result = nom + dir + finTabla;

    document.getElementById("resultados").innerHTML = result;
    
});