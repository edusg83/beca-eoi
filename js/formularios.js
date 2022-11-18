const form2 = document.getElementById('formulario1');

form.addEventListener('submit', function(element) {
    element.preventDefault();

    const formData = new FormData(form);
    var nombre=formData.get("nombreUsuario");

});

let arrayEjemplo=[{
    "id":"1",
    "tarjeta":"1111 2222 3333 4444",
    "propietario":"Propietario tarjeta 1"
},
{
    "id":"2",
    "tarjeta":"5555 6666 7777 8888",
    "propietario":"Propietario tarjeta 2"
},
{
    "id":"1",
    "tarjeta":"9999 1010 1111 1212",
    "propietario":"Propietario tarjeta 3"
}];


let tabla=`<table id="dataTable">
<thead>
    <tr>
        <th>Id</th>
        <th>Tarjeta</th>
        <th>Propietario</th>
    </tr>
</thead>
<tbody>`;

let finTabla=`</tbody>
    </table>`;

let filas=``;

arrayEjemplo.forEach(item => {
filas+=`
<tr>
    <td>${item.id}</td>
    <td>${item.tarjeta}</td>
    <td>${item.propietario}</td>
</tr>`;
});

tabla+=filas+finTabla;
document.getElementById("resultados").innerHTML=tabla;



const request = new Request("https://j4jjw.mocklab.io/users");

const URL=request.url;
const method = request.method;
const credentials = request.credentials;

fetch(request)
.then(response=> response.json())
.then(data => { 
    console.log(data);
});

const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
};

const urlUsers = 'https://j4jjw.mocklab.io/users';

axios.get(urlUsers,{headers})
.then((respuestaUsuarios)=> {
    let users;
    users=respuestaUsuarios.data.arrayUsuarios;
   
    users.forEach(element => {
        console.log(element.nombre);
    });
})



const form = document.getElementById('formulario');

form.addEventListener('submit', function(element) {
    element.preventDefault();
    const formData = new FormData(form);
    console.log(formData);

    const dataRequest = {
        "name":formData.get('name'),
        "description":formData.get('description'),
        "assignedTo":formData.get('assignedTo')
        }

    axios.post(url,dataRequest,{headers})
    .then((respuesta) => {
        window.location.assign('milestones.html');
    })
})

