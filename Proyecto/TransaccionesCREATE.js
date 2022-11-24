const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };

const url = "http://ligafalm.eu:28100/transactions",
      urlProduct = "http://ligafalm.eu:28100/products?page=0&size=100",
      urlGoal = "http://ligafalm.eu:28100/goals",
      form = document.getElementById("formularioTransaction");

axios.get(urlProduct,{headers})
.then((data1) => {
  dataProducts = data1.data;

  axios.get(urlGoal,{headers})
  .then((data2)=>{
    dataGoals = data2.data;

    let nom = `<div class="form-group row mb-2">
    <label class="col-4 col-form-label">Product:</label>
    <div class="col-8" id="resultadoProd">
      <select class="form-select" name="code">
      <option selected="true" disabled>Product</option>
    `
    let dir = ``;
    dataProducts.forEach(item => {
    dir +=`<option value="${item.code}">${item.name}</option>`
    });
    let finTabla = `</select></div></div>`;
    var result = nom + dir + finTabla;

    document.getElementById("resultadoProd").innerHTML = result;
  
    nom = `<div class="form-group row mb-2">
    <label class="col-4 col-form-label">Goal:</label>
    <div class="col-8" id="resultadoGoal">
      <select class="form-select" name="goal">
      <option selected="true" disabled>Goal</option>`
    
    dir = ``;
    dataGoals.forEach(item => {
    dir +=`<option value="${item.id}">${item.name}</option>`
    });
    finTabla = `</select></div></div>`;
    result = nom + dir + finTabla;

    document.getElementById("resultadoGoal").innerHTML = result;
      
    form.addEventListener("submit",function(elem) {
      elem.preventDefault();
  
      const formData = new FormData(form);
  
      var newTransaction = {
        "productCode":formData.get("code"),
        "total":formData.get("number"),
        "type":"SELL",
        "done":1,
        "goal":formData.get("goal")
      };
  
      axios.post(url,newTransaction,{headers})
      .then(()=> {
        window.location.assign("TransaccionesGET.html");
      })
      .catch((error)=>{
        console.log(error);
      });
  
  },false);

    
  });
});

