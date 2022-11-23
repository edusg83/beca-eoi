if(window.location.href.indexOf("index")>0){
    mostrar();
}else{
    producto();
}

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
         <div class="container">
         <div class="row m-10">
                        <div class="col-4" style="background-color: Orange;">Codigo</div>
                        <div class="col-4" style="background-color: Yellow;">Total</div>
                        <div class="col-4" style="background-color: Red;">Goal</div> `;
        
         let finTabla=`</div>`;
        
         let filastablas=``;
         productos.forEach(producto => {
            /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
            filastablas+=`
                    <div class="col-4"  style="background-color: Lightgrey;"><a href="transaction.html?id=${producto.id}">${producto.productCode}</a></div>
                    <div class="col-4" style="background-color: Lightgrey;">${producto.total}</div>
                    <div class="col-4" style="background-color: Lightgrey;">${producto.goal}</div>`;
         });
         tabla += filastablas+finTabla;
         document.getElementById("resultados").innerHTML=tabla;
        });
}

function mostrarID(id){
   
        const headers ={
                'Content-Type':'application/json',
                'Acces-Control-Allow-Origin':'*'
            };
            
            const urlUsers = "http://ligafalm.eu:28100/transactions/"+id;
            
            axios.get(urlUsers,{headers})
            .then((respuestaProductos) => {
                let productos=respuestaProductos.data;
                let tabla=`
                <div class="container">
                <div class="row m-10">
                                <div class="col-4" style="background-color: Grey;">Codigo</div>
                                <div class="col-4" style="background-color: Grey;">Total</div>
                                <div class="col-4" style="background-color: Grey;">Goal</div> `;
                
                let finTabla=`</div> </div>`;
                
                let filastablas=``;
                    /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
                    filastablas+=`
                            <div class="col-4" style="background-color: Lightgrey;">${productos.productCode}</div>
                            <div class="col-4" style="background-color: Lightgrey;">${productos.total}</div>
                            <div class="col-4" style="background-color: Lightgrey;">${productos.goal}</div>`;
                
                tabla += filastablas+finTabla;
                document.getElementById("resultados").innerHTML=tabla;
                }).catch((error) =>{
                    let tabla=`
                            <div class="container">
                            <div class="row m-10">
                                <div class="col-4" style="background-color: Grey;">Codigo</div>
                                <div class="col-4" style="background-color: Grey;">Total</div>
                                <div class="col-4" style="background-color: Grey;">Goal</div> 
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
        .then((respuestaProductos) => {
            let productos=respuestaProductos.data;
            document.getElementById("inCodigo").value=productos.productCode;
            document.getElementById("inTotal").value=productos.total;
            document.getElementById("inGoal").value=productos.goal;
            });
}

function buscar(){
    if(document.getElementById("buscador").value==""){
        mostrar();
    }else{
        document.getElementById("resultados").innerHTML = "";
        mostrarID(document.getElementById("buscador").value);
    }


    console.log( );
    
}

function producto(){
    var html = window.location.href; 
  
    var arrHtml = html.split("=");
    idStr = arrHtml[1];

    mostrarIDPro(idStr);
}

function PUTproducto(){
    var html = window.location.href; 
  
    var arrHtml = html.split("=");
    idStr = arrHtml[1];
    
      axios.put("http://ligafalm.eu:28100/transactions/"+idStr, {
                id:idStr,
                productCode:document.getElementById("inCodigo").value ,
                total:document.getElementById("inTotal").value,
                goal:document.getElementById("inGoal").value
            })
            .then((respuesta)=>{
                window.location.href = "indexTR.html" 

            });
}

function DELETEproducto(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    var html = window.location.href; 

    var arrHtml = html.split("=");
    idStr = arrHtml[1];
    
      axios.delete("http://ligafalm.eu:28100/transactions/"+idStr,{headers})
      .then((respuesta)=>{
            console.log(respuesta.data);
            window.location.href = "indexTR.html";
        })
      .catch((error)=>{
        console.log(error);
      });
      
}