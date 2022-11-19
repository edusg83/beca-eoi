const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
};

const urlUsers = 'http://ligafalm.eu:28100/products';

axios.get(urlUsers,{headers})
    .then((respuestaProductos)=> {
        let datos;
        datos = respuestaProductos.data;

    let tabla = `<table id="dataTable">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Code</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    let filas=``;
    
    datos.forEach(item => {
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
    });
    