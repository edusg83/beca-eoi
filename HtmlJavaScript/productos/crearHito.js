const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};



// ############ LLAMADAS ##########################################################
crearHito();



// ############# CRUD ########################################################################################3333
// POST ONE MILESTONE
function crearHito(){
    const formulario = document.getElementById("formulario12");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let nombre = formData.get("nombre");
        let inicio = formData.get("inicio");
        let final = formData.get("final");

    
        const dataRequest = {
            "name":nombre,
            "start": inicio,
            "end": final
        };

        console.log(dataRequest)
    
        axios.post('http://ligafalm.eu:28100/milestones', dataRequest, {headers})
            .then((url)=>{
                window.location.assign("hitos.html");
            })
    });
}




// ################# MOVIMIENTOS ##################################################################################
function volver(){
    url = window.location.assign("hitos.html");
}