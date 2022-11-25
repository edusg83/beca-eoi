const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };

const url = "http://ligafalm.eu:28100/goals",
      urlProduct = "http://ligafalm.eu:28100/products?page=0&size=100",
      urlTransaction = "http://ligafalm.eu:28100/transactions",
      form = document.getElementById("formularioGoal");

axios.get(url,{headers})
.then((data2)=>{
  dataGoals = data2.data;

    let nom = `
    <select class="form-select" name="user">
    `
    let dir;
        dir = `
          <option value="AdminUserTestUsername" selected="true" disabled>Select User</option>
          <option value="UserTestUsername">AdminUserTestUsername</option>
          <option value="UserTestUsername">UserTestUsername</option>
        `;

    let finTabla = `</select>`;
    
    var result = nom + dir + finTabla;

    document.getElementById("Usuarios").innerHTML = result;

    form.addEventListener("submit",function(elem) {
      elem.preventDefault();
  
      const formData = new FormData(form);
  
      var newTransaction = {
        "name":formData.get("name"),
        "description":formData.get("description"),
        "assignedTo":formData.get("user"),
        /*"progress":0.0*/
      };
  
      axios.post(url,newTransaction,{headers})
      .then(()=> {
        window.location.assign("GoalGET.html");
      })
      .catch((error)=>{
        console.log(error);
      });
  
  },false);

  })
  .catch((error)=> {
    console.log(error);
  });


