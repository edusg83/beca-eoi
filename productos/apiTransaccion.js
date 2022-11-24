if(window.location.href.indexOf("index")>0){
    mostrarTransaccion();
}else{
    transaccion();
}
if(window.location.href.indexOf("transaccionNueva")){
    selectProductCode();
    selectGoal();
}

function mostrarTransaccion(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    const urlUsers = "http://ligafalm.eu:28100/transactions?page=0&size=100";

    axios.get(urlUsers,{headers})
    .then((respuestaTransacciones) => {
         let transacciones=respuestaTransacciones.data;
         let tabla=`
         <div class="container-fluid">
         <div class="row m-10">
                        <div class="col-3" style="background-color: #F5F2E7;">ProductCode</div>
                        <div class="col-3" style="background-color: #F5F2E7;">Type</div>
                        <div class="col-3" style="background-color: #F5F2E7;">Total</div>
                        <div class="col-3" style="background-color: #F5F2E7;">Done</div>
                        <div class="col-3" style="background-color: #F5F2E7;">Goal</div> `;
        
         let finTabla=`</div>`;
        
         let filastablas=``;
         transacciones.forEach(transaccion => {
            /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
            filastablas+=`
                    <div class="col-3"  style="background-color: #F1F1F1;"><a href="transaccion.html?id=${transaccion.id}">${transaccion.productCode}</a></div>
                    <div class="col-3" style="background-color: #F1F1F1;">${transaccion.type}</div>
                    <div class="col-3" style="background-color: #F1F1F1;">${transaccion.total}</div>
                    <div class="col-3" style="background-color: #F1F1F1;">${transaccion.done}</div>
                    <div class="col-3" style="background-color: #F1F1F1;">${transaccion.goal}</div>`;
         });
            // opcionCrear=`<div class="d-flex justify-content-around"><a href="productonuevo.html">Crear</button></div>`
         tabla += filastablas+ finTabla;
         document.getElementById("resultadosTransaccion").innerHTML=tabla;
        });
}


function mostrarID(id){
   
    const headers ={
            'Content-Type':'application/json',
            'Acces-Control-Allow-Origin':'*'
        };
        
        const urlUsers = "http://ligafalm.eu:28100/transactions/"+id;
        
        axios.get(urlUsers,{headers})
        .then((respuestaTransacciones) => {
            let transacciones=respuestaTransacciones.data;
            let tabla=`
            <div class="container">
            <div class="row m-10">
                <div class="col-3" style="background-color: #F5F2E7;">ProductCode</div>
                <div class="col-3" style="background-color: #F5F2E7;">Type</div>
                <div class="col-3" style="background-color: #F5F2E7;">Total</div>
                <div class="col-3" style="background-color: #F5F2E7;">Done</div>
                <div class="col-3" style="background-color: #F5F2E7;">Goal</div> `;
            
            let finTabla=`</div> </div>`;
            
            let filastablas=``;
                /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
                filastablas+=`
                <div class="col-3"  style="background-color: #F1F1F1;">${transacciones.productCode}</div>
                <div class="col-3" style="background-color: #F1F1F1;">${transacciones.type}</div>
                <div class="col-3" style="background-color: #F1F1F1;">${transacciones.total}</div>
                <div class="col-3" style="background-color: #F1F1F1;">${transacciones.done}</div>
                <div class="col-3" style="background-color: #F1F1F1;">${transacciones.goal}</div>`;
            
            tabla += filastablas+finTabla;
            document.getElementById("resultados").innerHTML=tabla;
            }).catch((error) =>{
                let tabla=`
                        <div class="container">
                        <div class="row m-10">
                            <div class="col-3" style="background-color: #F5F2E7;">ProductCode</div>
                            <div class="col-3" style="background-color: #F5F2E7;">Type</div>
                            <div class="col-3" style="background-color: #F5F2E7;">Total</div>
                            <div class="col-3" style="background-color: #F5F2E7;">Done</div>
                            <div class="col-3" style="background-color: #F5F2E7;">Goal</div> 
                        </div>
                        </div>`;

                document.getElementById("resultados").innerHTML=tabla;
                window.alert("No se ha encontado");
            });
}



function mostrarIDPro(id){
   
    const headers ={
            'Content-Type':'application/json',
            'Acces-Control-Allow-Origin':'*'
        };
        
        const urlUsers = "http://ligafalm.eu:28100/transactions/"+id;
        
        axios.get(urlUsers,{headers})
        .then((respuestaTransacciones) => {
            let transacciones=respuestaTransacciones.data;
            document.getElementById("inNombre").value=productos.name;
            document.getElementById("inDescription").value=productos.description;
            document.getElementById("inCodigo").value=productos.code;

            document.getElementById("inProductCode").value = transacciones.productCode;
                total:document.getElementById("inTotal").value = transacciones.total;
                type:document.getElementById("inType").value = transacciones.type;
                done:document.getElementById("inDone").value = transacciones.done;
                goal:document.getElementById("inGoal").value = transacciones.goal;
            });
}

function transaccion(){
    var html = window.location.href; 
  
    var arrHtml = html.split("=");
    idStr = arrHtml[1];

    if (idStr!=undefined)
    {
        mostrarIDTran(idStr);
    }
}


function selectProductCode(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    
    const urlUsers = "http://ligafalm.eu:28100/products/?page=0&size=100";

    var options='';
    
    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
         let productos=respuestaProductos.data;
        
         productos.forEach(producto => {
           
            optionsProduct=options + `<option style="background-color: #F1F1F1;" value="${producto.code}">${producto.code}</option>`;
         });
           
         document.getElementById("selectProductCode").innerHTML=optionsProduct;
        });
}


function selectGoal(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    const urlUsers = "http://ligafalm.eu:28100/goals/?page=0&size=100";

    var optionsGoal='';

    axios.get(urlUsers,{headers})
    .then((respuestaGoals)=>{
        let goals=respuestaGoals.data;

        goals.forEach(goal =>{
            optionsGoal=optionsGoal+`<option style="background-color: #F1F1F1;" value="${goal.id}">${goal.name}</option>`;
    });
    document.getElementById("selectGoal").innerHTML=optionsGoal;
    });
}


function POSTtransaccion() {
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const dataRequest={
                productCode:document.getElementById("inProductCode").value,
                total:document.getElementById("inTotal").value,
                type:"SELL",
                done: 1,
                goal:document.getElementById("inGoal").value
    }
    console.log("Id: " + transaccion.id, + " productCode: " + transaccion.total + " type: " + transaccion.type + " done: "+ transaccion.done + " goal: " + transaccion.goal);
    
      axios.post("http://ligafalm.eu:28100/transactions/",dataRequest, {headers})
      .then((respuesta)=>{
        console.log(respuesta.data);
        window.location.href = "index.html" 
      })
      .catch((error)=>{
        console.log(error);
      });
}
