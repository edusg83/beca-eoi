const headers = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*'
};

const request = "http://ligafalm.eu:28100/products";

axios.get(request,{headers})
.then((data)=> {

  var user = data.data

    let nom = `
    <table class="bg-personal0 text-center border border-2 text-white shadow">
    <thead class="border border-3 border-dark">
      <tr>
        <th class="col-2">Producto</th>
        <th class="col-2">Desccipcion</th>
        <th class="col-2">codigo</th>
        <th class="col-2">options</th>
      </tr>
    </thead>
    <tbody>`

    let dir = ``;
 
    user.forEach(item => {
    dir +=`
    <tr class="border-personal">
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.code}</td>
      <td><button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modal">Update</button>

      <button>Delete.</button></td>
    </tr>`
    });

    let finTabla = `</table>
    </tbody>`;

    var result = nom + dir + finTabla;

    document.getElementById("resultados").innerHTML = result;
    
});
