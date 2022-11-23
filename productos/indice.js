const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};


// URL de la api
const url = 'http://ligafalm.eu:28100/products';

// Recuperamos la lista de productos y la mostramos
axios.get(url)
    .then((productosLista) => { 
        let productos = productosLista.data;
        tablaProductos(productos);
    });


// Funcion que muestra la lista de productos
function tablaProductos(productos){
    let tabla = `
    <h1>Lista de productos</h1>
    <table id="dataTable", class="tg">
    <thead>
        <tr>
            <th class="th">Id</th>
            <th class="th">Nombre</th>
            <th class="th">Descripción</th>
            <th class="th">Código</th>
            <th class="th">Opciones</th>  
        </tr>
    </thead>
    <tbody>`;

 //             
    
    let finTabla=`</tbody>
        </table>`;
    
    let filas=``;
    
    productos.forEach(item => {
    filas+=`
        <tr>
            <td class="tg-0lax">
                ${item.id}
            </td>
            <td class="tg-0lax">${item.name}</td>
            <td class="tg-0lax"> ${item.description}</td>
            <td class="tg-0lax">${item.code}</td>
            <td class="opciones"> 
                <a href="producto.html?id=${item.id}")"><img src="editar.png", width=20px></a>
                <a onclick="borrarProducto(${item.id})"><img src="borrar.png", width=20px>
            </a>
            </td>
        </tr>`;
    });
    
  

    tabla += filas+finTabla;
    document.getElementById("tablaProductos").innerHTML = tabla;
}
        

function borrarProducto(id){
    let borrar = confirm("¿Desea borrar este producto?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/products/'+id, {headers})
            .then((url)=>{
                window.location.assign("indice.html");
            })
            .catch((error)=>
            console.log(error)
            );
            
    }  
    };



/*
function muestraProducto(enlace){
    axios.get(enlace)
        .then((elemento) => { 
            let producto = elemento.data
            let docu = producto.html;
            let tabla = `<table id="dataTable", class="tg">
                <thead>
                     <tr>
                        <th class="th">Id</th>
                        <th class="th">Nombre</th>
                        <th class="th">Descripción</th>
                        <th class="th">Código</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">
                            ${producto.id}
                        </td>
                        <td class="tg-0lax">
                            ${producto.name}
                        </td>
                        <td class="tg-0lax"> ${producto.description}</td>
                        <td class="tg-0lax">${producto.code}</td>
                    </tr>;
                </tbody>
                </table>`;
                docu.getElementById("resultados").innerHTML = tabla;
        });
         
}
*/






