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
                    <div class="col-4"  style="background-color: Lightgrey;"><a href="producto.html?id=${producto.id}">${producto.name}</a></div>
                    <div class="col-4" style="background-color: Lightgrey;">${producto.description}</div>
                    <div class="col-4" style="background-color: Lightgrey;">${producto.code}</div>`;
         });
            opcionCrear=`<div class="d-flex justify-content-around"><a href="productonuevo.html">Crear</button></div>`
         tabla += filastablas+ opcionCrear + finTabla;
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
                                <div class="col-4" style="background-color: Grey;">Codigo</div> 
                                `;
                
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

function mostrarIDPro(id){
   
    const headers ={
            'Content-Type':'application/json',
            'Acces-Control-Allow-Origin':'*'
        };
        
        const urlUsers = "http://ligafalm.eu:28100/products/"+id;
        
        axios.get(urlUsers,{headers})
        .then((respuestaProductos) => {
            let productos=respuestaProductos.data;
            document.getElementById("inNombre").value=productos.name;
            document.getElementById("inDescription").value=productos.description;
            document.getElementById("inCodigo").value=productos.code;
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
    
      axios.put("http://ligafalm.eu:28100/products/"+idStr, {
                id:idStr,
                name:document.getElementById("inNombre").value ,
                description:document.getElementById("inDescription").value,
                code:document.getElementById("inCodigo").value
            });
     window.location.href = "index.html" 
}



function DELETEproducto() {
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    var html = window.location.href; 
  
    var arrHtml = html.split("=");
    idStr = arrHtml[1];

    var borrar = confirm("¿Seguro que quiere borrar este producto?");

    if(borrar === true){
    axios.delete('http://ligafalm.eu:28100/products/'+idStr,{headers})
    .then((respuesta)=>{
    console.log(respuesta.data);
    window.location.href = "index.html";
    })
    .catch(error=>{
        console.log(error);    
    });
    }
}

function paginaPrincipal() {
    window.location.href = "index.html";
}

function POSTproducto() {
    var html = window.location.href; 
  
    var arrHtml = html.split("=");
    idStr = arrHtml[1];
    
      axios.post("http://ligafalm.eu:28100/products/", {
            name:document.getElementById("inNombre").value,
            description:document.getElementById("inDescription").value,
            code:document.getElementById("inCodigo").value
        })
    .then((respuesta)=>{
    console.log(respuesta.data);
    window.location.href = "index.html" 
    })
    .catch((error)=>{
        console.log(error);
    });
}
