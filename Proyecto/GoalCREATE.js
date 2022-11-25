const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };

const url = "http://ligafalm.eu:28100/goals",
      urlProduct = "http://ligafalm.eu:28100/products?page=0&size=100",
      urlTransaction = "http://ligafalm.eu:28100/transactions",
      urlMilestone = "http://ligafalm.eu:28100/milestones",
      form = document.getElementById("formularioGoal");


axios.get(url,{headers})
.then((data2)=>{
  dataGoals = data2.data;
axios.get(urlMilestone,{headers})
.then((data1)=> {
  dataMils = data1.data;

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

    nom = `
    <select class="form-select" name="milestone">
      <option value="AdminUserTestUsername" selected="true" disabled>Select Milestone</option>
    `
    dir = ``;
    dataMils.forEach(item => {
      dir += `
      <option value="${item.id}">${item.name}</option>
    `;
    });
     

    finTabla = `</select>`;
    
    result = nom + dir + finTabla;

    document.getElementById("Milestones").innerHTML = result;

    form.addEventListener("submit",function(elem) {
      elem.preventDefault();
  
      const formData = new FormData(form);
  
      var newTransaction = {
        "name":formData.get("name"),
        "description":formData.get("description"),
        "assignedTo":formData.get("user"),
      };


  
      axios.post(url,newTransaction,{headers})
      .then((dataid)=> {
        var idGoal = dataid.data;
        var idMil = formData.get("milestone")
        var urlMil= urlMilestone+"/"+idMil+"/goals";

          axios.get(urlMil,{headers})
          .then((mils)=> {
            var ArrayIds=[];
            var goalsId = mils.data.goals;
              goalsId.forEach( items => {
                ArrayIds.push(items.id);
              })
            ArrayIds.push(idGoal);
            console.log(ArrayIds)
            var addGoal = {
              "idMilestone":idMil,
              "goals":ArrayIds
            };
            console.log(addGoal);
            urlAdd = url + "/milestone/" + idMil;
            axios.put(urlAdd,addGoal,{headers})
            .then((data)=>{console.log(data.data);})
            .catch((error)=>{console.log(error);});

          })

      })
      .catch((error)=>{
        console.log(error);
      });
  
  },false);
})

  })
  .catch((error)=> {
    console.log(error);
  });


