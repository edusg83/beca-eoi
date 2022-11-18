const url = 'http://ligafalm.eu:28100/products';

axios.get(url)
    .then((productosLista) => { 
        let productos = productosLista.data;
        console.log(productos);
        tablaProductos(productos);
    });




function tablaProductos(productos){
    let tabla = `<table id="dataTable", class="tg">
    <thead>
        <tr>
            <th class="th">Id</th>
            <th class="th">Nombre</th>
            <th class="th">Descripción</th>
            <th class="th">Código</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    
    let filas=``;
    
    productos.forEach(item => {
    filas+=`
        <tr>
            <td class="tg-0lax">${item.id}</td>
            <td class="tg-0lax">${item.name}</td>
            <td class="tg-0lax"> ${item.description}</td>
            <td class="tg-0lax">${item.code}</td>
        </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
}


