const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};





// ############# LLAMADAS ########################3
actualizarObjetivo();
listaUsuarios();


// ############## CRUD #####################################

// GET ALL USERS
// Recuperamos TODOS LOS OBJETIVOS y mostramos su codigo en el formulario
function listaUsuarios(){
    axios.get('http://ligafalm.eu:28100/users/?page=0&size=100')
    .then((respuesta) => { 
        let objetivos = respuesta.data;

        let lista = `<select name="users", id="us">`;         
        let options=``;
        let finLista=`</select>`;

        objetivos.forEach(item => {
        options+=`<option value="${item.username}">${item.username}</option> `;
        });

        lista += options+finLista;
        document.getElementById("listaUsuarios").innerHTML = lista;
    });
}



// DELETE ONE
function borrarObjetivo(){
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
            let assignedTo = formData.get("assignedTo");

            const dataRequest = {
                "id":id,
                "name":nombre,
                "description": descripcion,
                "assignedTo": assignedTo
            };
        
            axios.put('http://ligafalm.eu:28100/goals/'+id, dataRequest, {headers})
                .then((url)=>{
                    window.location.assign("objetivos.html");
                })
        });
    });
}




// ########### MOVIMIENTOS ##########################################################################################
function volver(){
    url = window.location.assign("productos.html");
}

