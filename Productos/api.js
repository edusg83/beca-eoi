
mostrar();

function mostrar(){
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };
    
    const urlUsers = "http://ligafalm.eu:28100/products";
    
    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
         let productos=respuestaProductos.data;
         let tabla=`
         <div class="container">
         <div class="row m-10">
                        <div class="col-4" style="background-color: Grey;">Nombre</div>
                        <div class="col-4" style="background-color: Grey;">Description</div>
                        <div class="col-4" style="background-color: Grey;">Codigo</div> `;
        
         let finTabla=`</div>`;
        
         let filastablas=``;
         productos.forEach(producto => {
            /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
            filastablas+=`
                    <div class="col-4" style="background-color: Lightgrey;">${producto.name}</div>
                    <div class="col-4" style="background-color: Lightgrey;">${producto.description}</div>
                    <div class="col-4" style="background-color: Lightgrey;">${producto.code}</div>`;
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
            
            const urlUsers = "http://ligafalm.eu:28100/products/"+id;
            
            axios.get(urlUsers,{headers})
            .then((respuestaProductos) => {
                let productos=respuestaProductos.data;
                let tabla=`
                <div class="container">
                <div class="row m-10">
                                <div class="col-4" style="background-color: Grey;">Nombre</div>
                                <div class="col-4" style="background-color: Grey;">Description</div>
                                <div class="col-4" style="background-color: Grey;">Codigo</div> `;
                
                let finTabla=`</div> </div>`;
                
                let filastablas=``;
                    /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
                    filastablas+=`
                            <div class="col-4" style="background-color: Lightgrey;">${productos.name}</div>
                            <div class="col-4" style="background-color: Lightgrey;">${productos.description}</div>
                            <div class="col-4" style="background-color: Lightgrey;">${productos.code}</div>`;
                
                tabla += filastablas+finTabla;
                document.getElementById("resultados").innerHTML=tabla;
                }).catch((error) =>{
                    let tabla=`
                            <div class="container">
                            <div class="row m-10">
                                <div class="col-4" style="background-color: Grey;">Nombre</div>
                                <div class="col-4" style="background-color: Grey;">Description</div>
                                <div class="col-4" style="background-color: Grey;">Codigo</div> 
                            </div>
                            </div>`;

                    document.getElementById("resultados").innerHTML=tabla;
                    window.alert("No se ha encontado");
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

