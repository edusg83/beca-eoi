const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

// Recuperamos el id
let url = window.location.href;
let id = url.split("=")[1];


// ############# LLAMADAS ########################3
actualizarHito();




// ############## CRUD #####################################


 


// DELETE ONE MILESTONE
function borrarHito(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

    let borrar = confirm("¿Desea borrar este hito?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/milestones/'+id, {headers})
            .then((url)=>{
                window.location.assign("hitos.html");
            })
            .catch((error)=>
            console.log(error)
            );
            
    }  
};

// PUT ONE MILESTONE
function actualizarHito(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

    axios.get('http://ligafalm.eu:28100/milestones/'+id, {headers})
    .then((hito) => { 
        // Recuperamos los datos del hito y los metemos en el formulario
        document.getElementById("nom").value = hito.data.name;
        document.getElementById("ini").value = hito.data.start;
        document.getElementById("fin").value = hito.data.end;

        // Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
        const formulario = document.getElementById("formulario13");
        formulario.addEventListener("submit", function(element){
            element.preventDefault();
            const formData = new FormData(formulario);
            
            let nombre = formData.get("nombre");
            let inicio = formData.get("inicio");
            let final = formData.get("final");

            const dataRequest = {
                "id":id,
                "name":nombre,
                "start": inicio,
                "end": final
            };
        
            axios.put('http://ligafalm.eu:28100/milestones/'+id, dataRequest, {headers})
                .then((url)=>{
                    url = window.location.assign("hitos.html");
                })
        });
    });
}



// ########### MOVIMIENTOS ##########################################################################################
function volver(){
    url = window.location.assign("hitos.html");
}

