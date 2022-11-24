const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};



// ############ LLAMADAS ##########################################################
crearProducto();



// ############# CRUD ########################################################################################3333
// POST ONE PRODUCT
function crearProducto(){
    const formulario = document.getElementById("formulario2");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let nombre = formData.get("nombre");
        let descripcion = formData.get("descripcion");
        let codigo = formData.get("codigo");
    
        const dataRequest = {
            "name":nombre,
            "description": descripcion,
            "code": codigo
        };
    
        axios.post('http://ligafalm.eu:28100/products', dataRequest, {headers})
            .then((url)=>{
                window.location.assign("productos.html");
            })
    });
}




// ################# MOVIMIENTOS ##################################################################################
function volver(){
    url = window.location.assign("productos.html");
}