// -- Inicio -----
if(window.location.href.indexOf("index")>0){
    mostrar();

}else if(window.location.href.indexOf("goal")>0){
    goalMostrar();
}else if(window.location.href.indexOf("crear")>0){
    goalMostrarCrear();
}

// -- Mostrar Lista -------
function mostrar(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    
    const urlUsers = "http://ligafalm.eu:28100/goals?page=0&size=100";
    
    axios.get(urlUsers,{headers})
    .then((respuesta) => {
         let respuestas=respuesta.data;
         let tabla=`
         <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody> `;
        
         let finTabla=`</tbody>
         </table>`;
        
         let filastablas=``;
         respuestas.forEach(respuesta => {
            filastablas+=`
            <tr>
                <th scope="row" style="cursor:pointer; cursor: hand" onClick=goGoal(${respuesta.id})>${respuesta.name}</th>
                <td>${respuesta.description}</td>
                <td>${respuesta.assignedTo}</td>
                <td>${respuesta.progress}</td>
                <td>
                    <div>
                        <img onClick=borrar(${respuesta.id}) src="img/eliminar.png" width="20" height="20">
                        <img onClick=irPUt(${respuesta.id}) src="img/boligrafo.png" width="20" height="20">
                    </div>
                </td>
            </tr>`;
         });
         tabla += filastablas+finTabla;
         document.getElementById("resultados").innerHTML=tabla;
        });
    }

    function goGoal(id){
        window.location.href = "goal.html?id="+id;
       
    }

    function goalMostrar(){
        var html = window.location.href; 

        var arrHtml = html.split("=");
        idStr = arrHtml[1];

        const headers ={
            'Content-Type':'application/json',
            'Acces-Control-Allow-Origin':'*'
        };

        const urlUsers = "http://ligafalm.eu:28100/goals/"+idStr;

        axios.get(urlUsers,{headers})
        .then((respuestas) => {
         let respuesta=respuestas.data;
         let tablagoat=`<table class="table table-striped border border-dark w-50 p-3 "><tbody>
                        <tr><th>Name</th><td>${respuesta.name}</td></tr>
                        <tr><th>Description</th><td>${respuesta.description}</td></tr>
                        <tr><th>Assigned</th><td>${respuesta.assignedTo}</td></tr>
                        <tr><th>Progress</th><td>${respuesta.progress}</td></tr>
                        </tbody> </table>`;
        
         let transactions = respuesta.transactions;
         let tablastrans;
         let tablasfin;
         let filastablas=``;
         if(transactions!==null){
            tablastrans=`<p>Transaction:</p>
         <table class="table table-striped border border-dark w-50 p-3 ">
         <thead>
            <tr>
                <th>Type</td>
                <th>Total</td>
                <th>Producte Code</td>
            </tr>
         </thead>
         <tbdoy>`;

         tablasfin=`</body></table>`;
         
         transactions.forEach(transaction => {
          
            filastablas=`
            <tr>
                <td>${transaction.type}</td>
                <td>${transaction.total}</td>
                <td>${transaction.productCode}</td>
            </tr>`;

            

         });
         }
         
         tablagoat+=tablastrans+filastablas+tablasfin;
         console.log(tablagoat);
         document.getElementById("transaction").innerHTML=tablagoat;
        });
    }

// -- Crear ------
function goalMostrarCrear(){
    let tablagoat=`<table class="table table-striped border border-dark w-50 p-3">
                        <tbody>
                            <tr><th>Name</th>   <td><input id="inName"></input></td></tr>
                            <tr><th>Description</th>    <td><input id="inDescription"></input></td></tr>`;

    let tablasfin=` </tbody></table> <br> <button onClick="CrearGoals()">Crear</button>`;

    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const urlUsers = "http://ligafalm.eu:28100/users?page=0&size=100";

    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
     let productos=respuestaProductos.data;
     let select=`<tr><th>User</th>  <td><select class="form-select" aria-label="Default select example" id="goalUser">`
     let finSelect = `</select></td></tr>`
     let filasSelect=``;
     productos.forEach(producto => {
        filasSelect+=`<option value="${producto.username}">${producto.username}</option>`;
     });

     const urlUsers = "http://ligafalm.eu:28100/milestones?page=0&size=100";

     axios.get(urlUsers,{headers})
     .then((respuestamilestones) => {
      let milestones=respuestamilestones.data;
      let select2=`<tr><th>Mileston</th><td><select class="form-select" aria-label="Default select example" id="goalMilestones">`
      let finSelect2 = `</select></td></tr>`
      let filasSelect2=``;
      milestones.forEach(mileston => {
         filasSelect2+=`<option value="${mileston.id}">${mileston.name}</option>`;
      });
      select2 += filasSelect2+finSelect2;
      select += filasSelect+finSelect;
      tablagoat+=select+select2+tablasfin;
      console.log(tablagoat);
      document.getElementById("transaction").innerHTML=tablagoat;

    });
     

     
    });
   
}

function CrearGoals(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    const selectUser = document.querySelector("#goalUser");
    const selectMilestones = document.querySelector("#goalMilestones");
    console.log(selectUser.value);
    let goalID = [];
    const dataRequest = {
        "name":document.getElementById("inName").value,
        "description":document.getElementById("inDescription").value,
        "assignedTo":selectUser.value
    };
    axios.get("http://ligafalm.eu:28100/milestones/"+selectMilestones.value+"/goals",{headers})
    .then((respuestaMilestone) => {        
        respuestaMilestone.data.goals.forEach(data => {
            goalID.push(data.id);
        });
    }); 

    axios.post("http://ligafalm.eu:28100/goals",dataRequest,{headers}).then((response) => {
    goalID.push(response.data);
    const dataMilestoneRequest = {
        "idMilestone":selectMilestones.value,
        "goals": goalID
    };

    axios.put("http://ligafalm.eu:28100/goals/milestone/"+selectMilestones.value,dataMilestoneRequest,{headers})
    .then((respuesta) => {
        console.log(respuesta.data);
    });
    //const urlUsers = "http://ligafalm.eu:28100/milestones/"+idStr+"/goals";

    
    
}).catch((error) =>{
   console.log(error);
});
}

