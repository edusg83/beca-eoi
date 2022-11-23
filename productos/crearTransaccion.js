const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};




function volver(){
    url = window.location.assign("transacciones.html");
}


// Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
const formulario = document.getElementById("formulario6");
formulario.addEventListener("submit", function(element){
    element.preventDefault();
    const formData = new FormData(formulario);
    
    let codigoProducto = formData.get("codeProduct");
    let total = formData.get("descripcion");
    let objetivo = formData.get("objetivo");

    const dataRequest = {
        "type":"SELL",
        "total":total,
        "done":1,
        "productCode": codigoProducto,
        "goal": objetivo
    };

    axios.post('http://ligafalm.eu:28100/products', dataRequest, {headers})
        .then((url)=>{
            window.location.assign("transacciones.html");
        })
});