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
      <td><button type="button" class="btn btn-secondary" onclick="verProducto(${item.id})" data-toggle="modal" data-target="#ModalUp">Update</button>

      <button type="button" class="btn btn-secondary" onclick="delProducto(${item.id})" data-toggle="modal" data-target="#ModalDel">Delete</button>
    </tr>`
    });

    let finTabla = `</table>
    </tbody>`;

    var result = nom + dir + finTabla;

    document.getElementById("resultados").innerHTML = result;
    
});



function verProducto(param1) {
  var url = request+"/"+param1

  axios.get(url,{headers})
.then((data) => {
  
  document.getElementById("producto-container").value = data.data.name;
  document.getElementById("descripcion-container").value = data.data.description;
  document.getElementById("codigo-container").value = data.data.code;

  //formulario
  var form = document.getElementById("formularioUpdate");

  form.addEventListener("submit",function(element) {
    element.preventDefault();
    const envio = {
      "id":data.data.id,
      "name":document.getElementById("producto-container").value,
      "description":document.getElementById("descripcion-container").value,
      "code":document.getElementById("codigo-container").value
    };
    axios.put(url,envio,{headers})
    .then(window.location.assign("EjendpointGET.html"));

  });

});
}


function delProducto(param1) {
  var url = request+"/"+param1

  axios.get(url,{headers})
  .then((data)=> {
    document.getElementById("producto-del").innerHTML = data.data.name;

  var form = document.getElementById("formularioDelete");

  form.addEventListener("submit",function(element) {
    element.preventDefault();
    const envio = {
      "id":data.data.id
    };
    axios.delete(url,envio,{headers})
    .then(window.location.assign("EjendpointGET.html"));

  });
});

}
