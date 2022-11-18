const headers ={
    'Content-Type':'application/json',
    'Acces-Control-Allow-Origin':'*'
};

const urlUsers = "https://j4jjw.mocklab.io/usersDataList";
let filas=``;
axios.get(urlUsers,{headers})
.then((respuestaUsuarios) => {
    let users;
    users=respuestaUsuarios.data.arrayUsuarios;
    var primer=true;
    users.forEach(element => {
        if(primer){
            primer=false;
            filas+=`
            <p>${element.nombre} ${element.apellidos}</p>`;

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
            var direccion = element.direcciones;

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




/*const headers ={
    'Content-Type':'application/json',
    'Acces-Control-Allow-Origin':'*'
};

const urlUsers = "https://j4jjw.mocklab.io/users";

axios.get(urlUsers,{headers})
.then((respuestaUsuarios) => {
    let users;
    users=respuestaUsuarios.data.arrayUsuarios;

    users.forEach(element => {
        console.log(element.nombre);
    });
});

const form = document.getElementById('formulario');

form.addEventListener('submit', function(element){
    element.preventDefault();
    const formData = new FormData(form);
    console.log(formData);

    const dataRequest = {
        "name":formData.get('name'),
        "description":formData.get('description'),
        "assignedTo":formData.get('assignedTo')
    };

    axios.post(url,dataRequest,{headers})
    .then((respuesta) =>{
        window.location.assign('milestones.html');
    });
});*/