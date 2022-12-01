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
    
    const urlUsers = "http://ligafalm.eu:28100/products?page=0&size=100";
    
    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
         let productos=respuestaProductos.data;
         let tabla=`
         <div class="container-fluid">
         <div class="row m-10">
                        <div class="col-4" style="background-color: #ede8d6;">Nombre</div>
                        <div class="col-4" style="background-color: #ede8d6;">Description</div>
                        <div class="col-4" style="background-color: #ede8d6;">Codigo</div> `;
        
         let finTabla=`</div>`;
        
         let filastablas=``;
         productos.forEach(producto => {
            /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
            filastablas+=`
                    <div class="col-4"  style="background-color: #F1F1F1;"><a href="producto.html?id=${producto.id}">${producto.name}</a></div>
                    <div class="col-4" style="background-color: #F1F1F1;">${producto.description}</div>
                    <div class="col-4" style="background-color: #F1F1F1;">${producto.code}</div>`;
         });
            // opcionCrear=`<div class="d-flex justify-content-around"><a href="productonuevo.html">Crear</button></div>`
         tabla += filastablas+ finTabla;
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
                <div class="container-fluid">
                <div class="row m-10">
                                <div class="col-4" style="background-color: #ede8d6;">Nombre</div>
                                <div class="col-4" style="background-color: #ede8d6;">Description</div>
                                <div class="col-4" style="background-color: #ede8d6;">Codigo</div> 
                                `;
                
                let finTabla=`</div> </div>`;
                
                let filastablas=``;
                    /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
                    filastablas+=`
                            <div class="col-4" style="background-color: #F1F1F1;">${productos.name}</div>
                            <div class="col-4" style="background-color: #F1F1F1;">${productos.description}</div>
                            <div class="col-4" style="background-color: #F1F1F1;">${productos.code}</div>`;
                
                tabla += filastablas+finTabla;
                document.getElementById("resultados").innerHTML=tabla;
                }).catch((error) =>{
                    let tabla=`
                            <div class="container">
                            <div class="row m-10">
                                <div class="col-4" style="background-color: #ede8d6;">Nombre</div>
                                <div class="col-4" style="background-color: #ede8d6;">Description</div>
                                <div class="col-4" style="background-color: #ede8d6;">Codigo</div> 
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

    if (idStr!=undefined)
    {
        mostrarIDPro(idStr);

    }
  
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
            })
            .then((respuesta)=> {
                window.location.href = "index.html";
            })
            .catch((error)=>{
                console.log(error);
            });
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
    const headers ={
        'Content-Type':'application/json',
        'Acces-Control-Allow-Origin':'*'
    };

    const dataRequest={
                name:document.getElementById("inNombre").value ,
                description:document.getElementById("inDescription").value,
                code:document.getElementById("inCodigo").value
    }
    
      axios.post("http://ligafalm.eu:28100/products/",dataRequest, {headers})
      .then((respuesta)=>{
        console.log(respuesta.data);
        window.location.href = "index.html" 
      })
      .catch((error)=>{
        console.log(error);
      });
}