const headers = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*'
};

const requestMod = "http://ligafalm.eu:28100/transactions",
      requestVerProd = "http://ligafalm.eu:28100/products?page=0&size=100",
      requestVerGoals = "http://ligafalm.eu:28100/goals?page=0&size=100";
  var requestVer = "http://ligafalm.eu:28100/transactions?page=0&size=10";

function tabla(param1){
axios.get(requestVerGoals,{headers})
.then((dataGoals)=> {
  Goals = dataGoals.data;
axios.get(requestVerProd,{headers})
.then((dataProd) => {
  Prod = dataProd.data;
axios.get(param1,{headers})
.then((data)=> {

  var trans = data.data

    let nom = `
    <table class="bg-personal0 text-center border border-2 text-white shadow">
    <thead class="border border-3 border-dark">
      <tr>
        <th class="col-2">productCode</th>
        <th class="col-2">total</th>
        <th class="col-2">type</th>
        <th class="col-2">done</th>
        <th class="col-2">goal</th>
        <th class="col-2">options</th>
      </tr>
    </thead>
    <tbody>`

    let dir = ``;
 
    trans.forEach(item => {
    dir +=`
    <tr class="border-personal">
      <td>${item.productCode}</td>
      <td>${item.total}</td>
      <td>${item.type}</td>
      <td>${item.done}</td>
      <td>${item.goal}</td>
      <td>
        <button type="button" class="btn btn-secondary" onclick="verTransaccion(${item.id})" data-toggle="modal" data-target="#ModalUp"><i class="fa-solid fa-pen-to-square"></i></button>
        <button type="button" class="btn btn-secondary" onclick="delTransaccion(${item.id})" data-toggle="modal" data-target="#ModalDel"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>`
    });

    let finTabla = `</table>
    </tbody>`;

    var result = nom + dir + finTabla;

    document.getElementById("resultados").innerHTML = result;
    
});
});
});
};

tabla(requestVer);

(function paginacion() {
  
  var pagina = requestVer.substring(43,44);
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




//MODALES:

function verTransaccion(param1) {
  var url = requestMod+"/"+param1

axios.get(requestVerProd,{headers})
.then((dataProd)=> {
  Productos = dataProd.data;
  axios.get(requestVerGoals,{headers})
  .then((dataGoals) =>{
      Goals = dataGoals.data;
      axios.get(url,{headers})
    .then((data) => {

      let nom = `
        <select class="form-select" name="code">
        <option  disabled>Product</option>
      `
      let dir = ``;
      Productos.forEach(item => {
        if (item.code == data.data.productCode) {
          console.log(data.data.productCode)
          dir +=`<option value="${item.code}" selected="true">(${item.code})=>${item.name} </option>`
        } else {
          dir +=`<option value="${item.code}">(${item.code})=> ${item.name}</option>`
        }
      });
      let finTabla = `</select>`;
      var result = nom + dir + finTabla;
      document.getElementById("resultadoProd").innerHTML = result;
    
      nom = `
        <select class="form-select" name="goal">
        <option disabled>Goal</option>`
      
      dir = ``;
      Goals.forEach(item => {
        if (item.id == data.data.goal){
          dir +=`<option value="${item.id}" selected="true">(${item.id})=>${item.name}</option>`
        } else {
          dir +=`<option value="${item.id}">(${item.id})=>${item.name}</option>`
        }
      });
      finTabla = `</select>`;
      result = nom + dir + finTabla;
  
      document.getElementById("resultadoGoal").innerHTML = result;

      document.getElementById("total-container").value = data.data.total;
      document.getElementById("type-container").value = data.data.type;
      document.getElementById("done-container").value = data.data.done;

      //formulario
      var form = document.getElementById("formularioUpdate");

      form.addEventListener("submit",function(element) {
        element.preventDefault();

        const formData = new FormData(form);

          var update = {
            "id":data.data.id,
            "type":formData.get("type"),
            "total":formData.get("total"),
            "done":formData.get("done"),
            "productCode":formData.get("code"),
            "goal":formData.get("goal")
          };

        axios.put(url,update,{headers})
        .then(()=> {
          tabla(requestVer);
        })
        .catch((error)=>{
          console.log(error);
        });

      });

    });

  });

});
};


function delTransaccion(param1) {
  var url = requestMod+"/"+param1

  axios.get(url,{headers})
  .then((data)=> {
    document.getElementById("Transaction-del").innerHTML = data.data.productCode;

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