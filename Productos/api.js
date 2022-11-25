// -- Inicio -----
if(window.location.href.indexOf("index")>0){
    mostrar();

}else if(window.location.href.indexOf("producto")>0){
producto();
}
// ------------

// -- Mostrar Lista -------
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
     <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Description</th>
                <th scope="col">Codigo</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody> `;
    
     let finTabla=`</tbody>
     </table>`;
    
     let filastablas=``;
     productos.forEach(producto => {
        /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
        filastablas+=`
        <tr>
            <th scope="row">${producto.name}</th>
            <td>${producto.description}</td>
            <td>${producto.code}</td>
            <td>
                <div>
                    <img onClick=borrar(${producto.id}) src="img/eliminar.png" width="20" height="20">
                    <img onClick=irPUt(${producto.id}) src="img/boligrafo.png" width="20" height="20">
                </div>
            </td>
        </tr>`;
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
            let producto=respuestaProductos.data;
            let tabla=`
            <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Description</th>
                <th scope="col">Codigo</th>
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody> `;
            
        let finTabla=`</tbody>
        </table>`;
            
            let filastablas=``;
                /*console.log("ID: "+producto.id+" Name: "+producto.name+" Descrpt: "+producto.description+" Code: "+producto.code);*/
                filastablas+=`
                <tr>
                    <th scope="row">${producto.name}</th>
                    <td>${producto.description}</td>
                    <td>${producto.code}</td>
                    <td>
                        <div>
                            <img onClick=borrar(${producto.id}) src="img/eliminar.png" width="20" height="20">
                            <img onClick=irPUt(${producto.id}) src="img/boligrafo.png" width="20" height="20">
                        </div>
                    </td>
                </tr>`;
                        
                        
                       
            tabla += filastablas+finTabla;
            console.log(tabla);
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

                document.getElementById("resultadosfiltro").innerHTML=tabla;
                window.alert("No se ha encontado");
            });
}

function buscar(){
if(document.getElementById("buscador").value==""){
    mostrar();
}else{
    document.getElementById("resultados").innerHTML = null;
    mostrarID(document.getElementById("buscador").value);
} 
}

function mostrarTodos(){
document.getElementById("resultados").innerHTML = "";
mostrar();
}
// -----------

// -- Actualizar -------
function irPUt(id){
window.location.href = "producto.html?id="+id;
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

function PUTproducto(){
var html = window.location.href; 

var arrHtml = html.split("=");
idStr = arrHtml[1];

  axios.put("http://ligafalm.eu:28100/products/"+idStr, {
            id:idStr,
            name:document.getElementById("inNombre").value ,
            description:document.getElementById("inDescription").value,
            code:document.getElementById("inCodigo").value
            
        }).then(() => {
            window.location.href = "index.html";
        });
        
}
// -----------------

// -- Borrar ---------
function borrar(id){
if (window.confirm("Estas seguro que deseas eliminar este producto?")) {
    axios.delete("http://ligafalm.eu:28100/products/"+id)
    .then(() => {
        window.alert("Eliminado");
        document.getElementById("resultados").innerHTML = "";
        mostrar();
    });
  }
 

}

// ---------------


// -- Crear -------
function Postproducto(){
axios.post("http://ligafalm.eu:28100/products/",{
    name:document.getElementById("inNombre").value ,
    description:document.getElementById("inDescription").value,
    code:document.getElementById("inCodigo").value
    
}).then(() => {
    window.location.href = "index.html";
});



}

// ---------------------
function producto(){
var html = window.location.href; 

var arrHtml = html.split("=");
idStr = arrHtml[1];

mostrarIDPro(idStr);
}