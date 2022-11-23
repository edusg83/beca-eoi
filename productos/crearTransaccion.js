const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};





// ########### CRUD ##############################################################################################

// GET ALL PRODUCTS
// Recuperamos la lista de productos y la mostramos en el formulario
axios.get('http://ligafalm.eu:28100/products')
    .then((respuesta) => { 
        let productos = respuesta.data;

        let lista = `<select name="codeProduct", id="codProd">`;         
        let options=``;
        let finLista=`</select>`;

        productos.forEach(item => {
        options+=`<option value="${item.code}">${item.code}</option> `;
        });

        lista += options+finLista;
        document.getElementById("listaCodigosProductos").innerHTML = lista;
    });


// GET ALL GOALS
axios.get('http://ligafalm.eu:28100/goals')
    .then((respuesta) => { 
        let objetivos = respuesta.data;

        let lista = `<select name="objetivos", id="obj">`;         
        let options=``;
        let finLista=`</select>`;

        objetivos.forEach(item => {
        options+=`<option value="${item.id}">${item.id}</option> `;
        });

        lista += options+finLista;
        document.getElementById("listaObjetivos").innerHTML = lista;
    });









// POST ONE
// Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
const formulario = document.getElementById("formulario6");
formulario.addEventListener("submit", function(element){
    element.preventDefault();
    const formData = new FormData(formulario);
    
    let codigoProducto = formData.get("codeProduct");
    let total = formData.get("total");
    let objetivo = formData.get("objetivos");

    const dataRequest = {
        "type":"SELL",
        "total":total,
        "done":1,
        "productCode": codigoProducto,
        "goal": objetivo
    }

    axios.post('http://ligafalm.eu:28100/transactions', dataRequest, {headers})
        .then((url)=>{
           window.location.assign("transacciones.html");
        })
});



// ######### MOVIMIENTOS ###########################################################################################
function volver(){
    url = window.location.assign("transacciones.html");
}