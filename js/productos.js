const url = 'http://ligafalm.eu:28100/products';

axios.get(url)
    .then((productosLista) => { 
        let productos = productosLista.data;
        console.log(productos);
        tablaProductos(productos);
    });




function tablaProductos(productos){
    let tabla = `<table id="dataTable">
    <thead>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Codigo</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    
    let filas=``;
    
    productos.forEach(item => {
    filas+=`
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.code}</td>
        </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
}


