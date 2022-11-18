const request = new Request("https://j4jjw.mocklab.io/usersDataList");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;

let filas=``;
fetch(request)
    .then(response => response.json())
    .then(data => {
        var datos = data.arrayUsuarios;
        var primer=true;
        datos.forEach(item =>{
            if(primer){
                primer=false;
                filas+=`
                <p>${item.nombre} ${item.apellidos}</p>`;
    
                let tabla=`<table id="dataTable">
                            <thead>
                                <tr>
                                    <th>Poblacion</th>
                                    <th>Nombre</th>
                                <tr>
                            </thead>
                        <tbody> `;
    
                let finTabla=`</tbody>
                        </table>`;
    
                let filastablas=``;
                var direccion = item.direcciones;
    
                direccion.forEach(itemdireccion =>{
                    filastablas+=`
                    <tr>
                        <td>${itemdireccion.poblacion}</td>
                        <td>${itemdireccion.nombre}</td>
                    </tr>`;
                });
                tabla += filastablas+finTabla;
                filas += tabla;
            }
            
        });
        document.getElementById("resultados").innerHTML=filas;
    });