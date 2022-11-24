const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

// Recuperamos el id
let url = window.location.href;
let id = url.split("=")[1];


// ############# LLAMADAS ########################3
actualizarObjetivo();
listaUsuarios();
tablaTransaccionesObjetivo(id);


// ############## CRUD #####################################

// GET ALL USERS
// Recuperamos TODOS LOS OBJETIVOS y mostramos su codigo en el formulario
function listaUsuarios(){
    axios.get('http://ligafalm.eu:28100/users/?page=0&size=100')
    .then((respuesta) => { 
        let objetivos = respuesta.data;

        let lista = `<select name="users", id="us", type="text">`;         
        let options=``;
        let finLista=`</select>`;

        objetivos.forEach(item => {
        options+=`<option value="${item.username}">${item.username}</option> `;
        });

        lista += options+finLista;
        document.getElementById("listaUsuarios").innerHTML = lista;
    });
}


// GET ALL TRANSACTIONS FROM ONE OBJECTIVE
// Recuperamos TODAS LAS TRANSACCIONES DE UN OBJETIVO
 function tablaTransaccionesObjetivo(id){
    axios.get('http://ligafalm.eu:28100/goals/'+id)
    .then((respuesta)=>{
        let transacciones = respuesta.data.transactions;

        let tabla = `
                <h1>Transacciones del objetivo</h1>
                <table id="dataTable", class="tg">
                    <thead>
                        <tr>
                            <th class="th">Id</th>
                            <th class="th">Código del producto</th>
                            <th class="th">Total</th>
                            <th class="th">Tipo</th>
                            <th class="th">Opciones</th>  
                        </tr>
                    </thead>
                    <tbody>`;         
            let filas=``;
            let finTabla=`
                        </tbody>
                    </table>`;

            transacciones.forEach(item => {
            filas+=`
                <tr>
                    <td class="tg-0lax">
                        ${item.id}
                    </td>
                    <td class="tg-0lax">${item.productCode}</td>
                    <td class="tg-0lax", style="text-align:center;"> ${item.total}</td>
                    <td class="tg-0lax", style="text-align:center;">${item.type}</td>
                    <td class="opciones"> 
                        <a href="transaccion.html?id=${item.id}")"><img src="editar.png", width=20px></a>
                        <a onclick="borrarTransaccion(${item.id})"><img src="borrar.png", width=20px></a>
                    </td>
                </tr>`;
            });

            tabla += filas+finTabla;
            document.getElementById("tablaTransacciones").innerHTML = tabla;
    })
 }



// DELETE ONE
function borrarObjetivo(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

    let borrar = confirm("¿Desea borrar este objetivo?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/goals/'+id, {headers})
            .then((url)=>{
                window.location.assign("objetivos.html");
            })
            .catch((error)=>
            console.log(error)
            );
            
    }  
};

// PUT ONE
function actualizarObjetivo(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

    axios.get('http://ligafalm.eu:28100/goals/'+id, {headers})
    .then((objetivo) => { 
        // Recuperamos los datos del objetivo y los metemos en el formulario
        document.getElementById("nom").value = objetivo.data.name;
        document.getElementById("desc").value = objetivo.data.description;
        document.getElementById("us").value = objetivo.data.assignedTo;

        // Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
        const formulario = document.getElementById("formulario8");
        formulario.addEventListener("submit", function(element){
            element.preventDefault();
            const formData = new FormData(formulario);
            
            let nombre = formData.get("nombre");
            let descripcion = formData.get("descripcion");
            let user = formData.get("users");
    //        let transactions = objetivo.data.transactions;
            const dataRequest = {
                "id":id,
                "name":nombre,
                "description": descripcion,
                "assignedTo": user,
                "progress": 0.0
            //    "transactions": transactions
            };
            console.log( user)
        
            axios.put('http://ligafalm.eu:28100/goals/'+id, dataRequest, {headers})
                .then((url)=>{
                    url = window.location.assign("objetivos.html");
                })
        });
    });
}




// ########### MOVIMIENTOS ##########################################################################################
function volver(){
    url = window.location.assign("objetivos.html");
}

