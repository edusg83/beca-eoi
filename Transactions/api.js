// -- Inicio -----
if(window.location.href.indexOf("index")>0){
    mostrar();

}else if(window.location.href.indexOf("crear")>0){
    crearProduct();
    crearGoal();
}else{
    var html = window.location.href; 

    var arrHtml = html.split("=");
    idStr = arrHtml[1];
    crearProductSelected(idStr);
}



// ------------

// -- Mostrar Lista -------
function mostrar(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    
    const urlUsers = "http://ligafalm.eu:28100/transactions?page=0&size=100";
    
    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
         let productos=respuestaProductos.data;
         let tabla=`
         <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Product code</th>
                    <th scope="col">Total Sell</th>
                    <th scope="col">Done</th>
                    <th scope="col">Type To</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody> `;
        
         let finTabla=`</tbody>
         </table>`;
        
         let filastablas=``;
         productos.forEach(trans => {
           
            filastablas+=`
            <tr>
                <th scope="row">${trans.productCode}</th>
                <td>${trans.total}</td>
                <td>${trans.done}</td>
                <td>${trans.type}</td>
                <td>
                    <div>
                        <img onClick=borrar(${trans.id}) src="img/eliminar.png" width="20" height="20">
                        <img onClick=irPUt(${trans.id}) src="img/boligrafo.png" width="20" height="20">
                    </div>
                </td>
            </tr>`;
         });
         tabla += filastablas+finTabla;
         document.getElementById("resultados").innerHTML=tabla;
        });
    }

// --------------

// -- Crear ---------

function crearProduct(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const urlUsers = "http://ligafalm.eu:28100/products?page=0&size=100";

    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
     let productos=respuestaProductos.data;
     let select=`<select class="form-select" aria-label="Default select example" id="goalProduct">`
     let finSelect = `</select>`
     let filasSelect=``;
     productos.forEach(producto => {
        filasSelect+=`<option value="${producto.code}">${producto.name}</option>`;
     });

     select += filasSelect+finSelect;
     document.getElementById("product").innerHTML=select;
    });
}

function crearGoal(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const urlUsers = "http://ligafalm.eu:28100/goals?page=0&size=100";

    axios.get(urlUsers,{headers})
    .then((respuestaGoals) => {
     let goals=respuestaGoals.data;
     let select=`<select class="form-select" aria-label="Default select example" id="goalSelect">`
     let finSelect = `</select>`
     let filasSelect=``;
     goals.forEach(goal => {
        filasSelect+=`<option value="${goal.id}">${goal.name}</option>`;
     });

     select += filasSelect+finSelect;
     document.getElementById("goal").innerHTML=select;
    });
}

function PostTransactions(){
    const selectProduct = document.querySelector("#goalProduct");
    const selectGoal = document.querySelector("#goalSelect");
    console.log(selectProduct.value);
    console.log(selectGoal);
    axios.post("http://ligafalm.eu:28100/transactions",{
    productCode:selectProduct.value,
    total: document.getElementById("inTotal").value,
    type: "SELL",
    done:1,
    goal:selectGoal.value
    
    
}).then(() => {
    window.location.href = "index.html";
}).catch((error) =>{
   console.log(error);
});
}
// --------------

// -- Borrar -----

function borrar(id){
    if (window.confirm("Estas seguro que deseas eliminar este producto?")) {
        axios.delete("http://ligafalm.eu:28100/transactions/"+id)
        .then(() => {
            window.alert("Eliminado");
            document.getElementById("resultados").innerHTML = "";
            mostrar();
        });
    }
}

// --------------

// -- Modificar --
function irPUt(id){
    window.location.href = "transaction.html?id="+id;
}

function crearProductSelected(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const urlUsers = "http://ligafalm.eu:28100/products?page=0&size=100";

    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
     let productos=respuestaProductos.data;
     let select=`<select class="form-select" aria-label="Default select example" id="goalProduct">`
     let finSelect = `</select>`
     let filasSelect=``;
    
     productos.forEach(producto => {
        let id = mostrarIDProReturn(producto.id)
        if(id.includes(producto.code)){
            filasSelect+=`<option value="${producto.code}" selected>${producto.name}</option>`;
        }else{
            filasSelect+=`<option value="${producto.code}">${producto.name}</option>`;
        }
       
     });

     select += filasSelect+finSelect;
     document.getElementById("product").innerHTML=select;
    });
}

function crearGoalSelected(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const urlUsers = "http://ligafalm.eu:28100/goals?page=0&size=100";

    axios.get(urlUsers,{headers})
    .then((respuestaGoals) => {
     let goals=respuestaGoals.data;
     let select=`<select class="form-select" aria-label="Default select example" id="goalSelect">`
     let finSelect = `</select>`
     let filasSelect=``;
     
     goals.forEach(goal => {
        
        filasSelect+=`<option value="${goal.id}">${goal.name}</option>`;
     });

     select += filasSelect+finSelect;
     document.getElementById("goal").innerHTML=select;
    });
}
function mostrarIDProReturn(id){

    const headers ={
            'Content-Type':'application/json',
            'Acces-Control-Allow-Origin':'*'
        };
        
        const urlUsers = "http://ligafalm.eu:28100/products/"+id;
        
        axios.get(urlUsers,{headers})
        .then((respuestaProductos) => {
            let productos=respuestaProductos.data;
            return productos.code;
            });
    }
function putTransaction(){
    var html = window.location.href; 

    var arrHtml = html.split("=");
    idStr = arrHtml[1];
}
// --------------