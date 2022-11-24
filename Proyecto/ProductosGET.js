const headers = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*'
};

const requestMod = "http://ligafalm.eu:28100/products";
  var requestVer = "http://ligafalm.eu:28100/products?page=0&size=10";
  var numPaginas = 0;

function tabla(param1){
axios.get(param1,{headers})
.then((data)=> {

  var prod = data.data

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
 
    prod.forEach(item => {
    dir +=`
    <tr class="border-personal">
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.code}</td>
      <td><button type="button" class="btn btn-secondary" onclick="verProducto(${item.id})" data-toggle="modal" data-target="#ModalUp"><i class="fa-solid fa-pen-to-square"></i></button>

      <button type="button" class="btn btn-secondary" onclick="delProducto(${item.id})" data-toggle="modal" data-target="#ModalDel"><i class="fa-solid fa-trash"></i></button>
    </tr>`
    });

    let finTabla = `</table>
    </tbody>`;

    var result = nom + dir + finTabla;

    document.getElementById("resultados").innerHTML = result;
    
});
};

tabla(requestVer);

console.log(numPaginas);

function verProducto(param1) {
  var url = requestMod+"/"+param1

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
    .then(()=> {
      tabla(requestVer);
    })
    .catch((error)=>{
      console.log(error);
    });

  });

});
};


function delProducto(param1) {
  var url = requestMod+"/"+param1

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
    .then((url)=> {
      tabla(requestVer);
    })
    .catch((error)=>{
      console.log(error);
    });

  });
});

};

(function paginacion() {
  
  var pagina = requestVer.substring(39,40);
  var boton1 = document.getElementById("ant");
  var boton2 = document.getElementById("sig");
  pagActual = pagina+"&";

    boton1.onclick = function () {
      if (pagina == 0) {
        console.log("No hay mas paginas")
      } else {
        pagina--;
        requestVer = requestVer.replace(pagActual,pagina+'&');
        pagActual = pagina+"&";
        tabla(requestVer);
        
        console.log(requestVer);
        console.log(pagina);

      }
    };

    boton2.onclick = function () {
      pagina++
      requestVer = requestVer.replace(pagActual,pagina+'&');
      pagActual = pagina+"&";
      tabla(requestVer);
      console.log(requestVer);
      console.log(pagina);
    };

}());