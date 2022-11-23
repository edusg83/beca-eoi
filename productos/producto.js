const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};




function volver(){
    url = window.location.assign("indice.html");
}



function borrarProducto(){
    let borrar = confirm("¿Desea borrar este producto?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/products/'+id, {headers})
            .then((url)=>{
                window.location.assign("indice.html");
            })
            .catch((error)=>
            console.log(error)
            );
            
    }  
    };










// Recuperamos el id
let url = window.location.href;
let id = url.split("=")[1];


axios.get('http://ligafalm.eu:28100/products/'+id, {headers})
.then((producto) => { 
    // Recuperamos los datos del producto y los metemos en el formulario
    document.getElementById("nom").value = producto.data.name;
    document.getElementById("desc").value = producto.data.description;
    document.getElementById("cod").value = producto.data.code;

    // Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
    const formulario = document.getElementById("formulario1");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let nombre = formData.get("nombre");
        let descripcion = formData.get("descripcion");
        let codigo = formData.get("codigo");

        const dataRequest = {
            "id":id,
            "name":nombre,
            "description": descripcion,
            "code": codigo
        };
    
        axios.put('http://ligafalm.eu:28100/products/'+id, dataRequest, {headers})
            .then((url)=>{
                window.location.assign("indice.html");
            })
    });
});




