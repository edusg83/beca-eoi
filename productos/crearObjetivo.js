const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};



// ############ LLAMADAS ##########################################################
crearObjetivo();
listaUsuarios();


// ############# CRUD ########################################################################################3333
// POST ONE GOAL
function crearObjetivo(){
    const formulario = document.getElementById("formulario9");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let nombre = formData.get("nombre");
        let descripcion = formData.get("descripcion");
        let user = formData.get("users");

    
        const dataRequest = {
            "name":nombre,
            "description": descripcion,
            "assignedTo": user,
            "progress": 0
        };
    
        axios.post('http://ligafalm.eu:28100/goals', dataRequest, {headers})
            .then((url)=>{
                window.location.assign("objetivos.html");
            })
    });
}

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



// ################# MOVIMIENTOS ##################################################################################
function volver(){
    url = window.location.assign("objetivos.html");
}