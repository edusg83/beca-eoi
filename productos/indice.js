
// URL de la api
const url = 'http://ligafalm.eu:28100/products';

// Recuperamos la lista de productos y la mostramos
axios.get(url)
    .then((productosLista) => { 
        let productos = productosLista.data;
        console.log(productos);
        tablaProductos(productos);
    });


// Funcion que muestra la lista de productos
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
            <td class="tg-0lax">
                ${item.id}
            </td>
            <td class="tg-0lax">
                <a href="file:///C:/Users/Chule/git/beca-eoi/productos/producto.html\?id=${item.id}", target="_blank")">${item.name}</a>
            </td>
            <td class="tg-0lax"> ${item.description}</td>
            <td class="tg-0lax">${item.code}</td>
        </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
}
        





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






