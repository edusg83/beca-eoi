const request = "https://j4jjw.mocklab.io/usersDataList";

axios.get(request)
.then((data)=> {

  var user = data.data.arrayUsuarios[0]

    let nom = `
    Nombre: ${user.nombre}<br>
    Apellidos: ${user.apellidos}<br>

    <table class="text-center bg-personal1 border border-3 border-success">
    <thead class="border border-3 border-success">
      <tr>
        <th class="col-6">Direccion</th>
        <th class="col-6">Localidad</th>
      </tr>
    </thead>
    <tbody>`

    let dir = ``;

 
    user.direcciones.forEach(item => {
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