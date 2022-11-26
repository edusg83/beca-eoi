var idItemEliminar;
const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

//const urlUsers = ("http://ligafalm.eu:28100/products");
//const urlUsers = ("http://ligafalm.eu:28100/products/?page=2");
const urlUsers = ("http://ligafalm.eu:28100/products");
axios.get(urlUsers,{headers})
.then((respuestaProductos) => {
    let tabla = `
    <div>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
    <table id="dataTable" class="text-center col-sm-11 mt-4">
    <thead>
        <tr class="text-center bg-primary text-white rounded-top">
            <th class="p-2 mb-2 border border-2 border-dark">Id</th>
            <th class="p-2 mb-2 border border-2 border-dark">Name</th>
            <th class="p-2 mb-2 border border-2 border-dark">Description</th>
            <th class="p-2 mb-2 border border-2 border-dark">Code</th>
            <th class="p-2 mb-2 border border-2 border-dark">Options</th>
        </tr>
    </thead>
    <tbody>`;
    let filas = ``;
    let finTabla = `
    </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
    </div>`;
    respuestaProductos.data.forEach(item => {
        filas +=`
        <tr class="bg-dark text-white rounded-bottom">
            <td class="col-sm-2 p-2 mb-2 border border-2 border-danger">${item.id}</td>
            <td class="col-sm-3 p-2 mb-2 border border-2 border-danger">${item.name}</td>
            <td class="col-sm-3 p-2 mb-2 border border-2 border-danger">${item.description}</td>
            <td class="col-sm-4 p-2 mb-2 border border-2 border-danger">${item.code}</td>
            <td class="col-sm-4 p-2 mb-2 border border-2 border-danger">
                <button data-bs-toggle='modal' data-bs-target='#modalDelete' onclick="guardaIdEliminar(${item.id}, '${item.name}')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="iconClick iconDeleteClick" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button> 
                <button data-bs-toggle='modal' data-bs-target='#exampleModal' onclick="editarObjeto(${item.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" class="iconClick iconEditClick" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button> 
            </td>
        </tr>`;
    });
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
});

function editarObjeto(idItem) {
    axios.get(urlUsers+"/"+idItem,{headers})
    .then((respuestaProductos) => {

        document.getElementById("recipient-id").value = respuestaProductos.data.id;
        document.getElementById("recipient-name").value = respuestaProductos.data.name;
        document.getElementById("message-text").value = respuestaProductos.data.description;
        document.getElementById("recipient-code").value = respuestaProductos.data.code;
        
        // Formulario para modificar articulos
        const form = document.getElementById('formulario');
        form.addEventListener('submit', function(element) {
            element.preventDefault();
            const formData = new FormData(form);
            const dataRequest = {
                "id":respuestaProductos.data.id,
                "name":document.getElementById("recipient-name").value,
                "description":document.getElementById("message-text").value,
                "code":document.getElementById("recipient-code").value
            };
            axios.put(urlUsers+"/"+idItem,dataRequest,{headers})
            .then((url) => {
                window.location.assign("./products.html");
            });
        });
    });
}
function guardaIdEliminar(idItem, nombreProducto){
    idItemEliminar=idItem;
    document.getElementById("nombreProducto").innerHTML=nombreProducto;
}

function eliminarObjeto(){
    axios.delete(urlUsers+"/"+idItemEliminar,{headers})
    .then((respuesta) => {
        console.log(respuesta.data);
        window.location.assign("./products.html");
    })
    .catch((error)=>{
        console.log(error);
        document.getElementById("mostrarInformación").innerHTML = error;
    });
}