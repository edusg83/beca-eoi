const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  };

const url = "http://ligafalm.eu:28100/goals",
      urlProduct = "http://ligafalm.eu:28100/products?page=0&size=100",
      urlTransaction = "http://ligafalm.eu:28100/transactions",
      urlMilestone = "http://ligafalm.eu:28100/milestones";
      form = document.getElementById("formularioGoal");


axios.get(url,{headers})
.then((data2)=>{
  dataGoals = data2.data;
axios.get(urlMilestone,{headers})
.then((data1)=> {
  dataMils = data1.data;

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


