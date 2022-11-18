const url = 'https://j4jjw.mocklab.io/users';

axios.get(url)
    .then((datosUsuarios) => { 
        arrayUsuarios = datosUsuarios.data.arrayUsuarios;
        console.log(arrayUsuarios);
        tablaResultados(arrayUsuarios);
    });



function tablaResultados (array){
    let tabla = `<table id="dataTable">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    
    let filas=``;
    
    array.forEach(item => {
    filas+=`
        <tr>
            <td>${item.nombre}</td>
            <td>${item.apellidos}</td>
            <td>${item.direccion}</td>
        </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
}





