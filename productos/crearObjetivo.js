const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};



// ############ LLAMADAS ##########################################################
crearObjetivo();



// ############# CRUD ########################################################################################3333
// POST ONE GOAL
function crearObjetivo(){
    const formulario = document.getElementById("formulario9");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let nombre = formData.get("nombre");
        let descripcion = formData.get("descripcion");

    
        const dataRequest = {
            "name":nombre,
            "description": descripcion,
        };
    
        axios.post('http://ligafalm.eu:28100/goals', dataRequest, {headers})
            .then((url)=>{
                window.location.assign("objetivos.html");
            })
    });
}




// ################# MOVIMIENTOS ##################################################################################
function volver(){
    url = window.location.assign("objetivos.html");
}