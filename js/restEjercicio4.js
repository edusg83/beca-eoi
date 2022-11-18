const urlUsers = "https://j4jjw.mocklab.io/users";

axios.get(urlUsers,{})
    .then((respuestaUsuarios)=>{
        let datos = respuestaUsuarios.data.arrayUsuarios;

    let tabla = `<table id="dataTable">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Direccion</th>
        </tr>
    </thead>
    <tbody>`;
    
    let finTabla=`</tbody>
        </table>`;
    let filas=``;
    
    datos.forEach(item => {
    filas+=`
    <tr>
        <td>${item.nombre}</td>
        <td>${item.apellidos}</td>
        <td>${item.direccion}</td>
    </tr>`;
    });
    
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
    });
    