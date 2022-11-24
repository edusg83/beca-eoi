const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

// ############# LLAMADAS ########################3
actualizarTransaccion();
listaCodigosFormulario();
listaObjetivosFormulario();

// ########### CRUD ##############################################################################################
// PUT ONE TRANSACTION
function actualizarTransaccion(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

    axios.get('http://ligafalm.eu:28100/transactions/'+id, {headers})
    .then((transaccion) => { 
        // Recuperamos los datos del producto y los metemos en el formulario
        document.getElementById("codProd").value = transaccion.data.productCode;
        document.getElementById("tot").value = transaccion.data.total;
        document.getElementById("obj").value = transaccion.data.goal;

        // Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
        const formulario = document.getElementById("formulario5");
        formulario.addEventListener("submit", function(element){
            element.preventDefault();
            const formData = new FormData(formulario);
            
            let codigoProducto = formData.get("codeProduct");
            let total = formData.get("total");
            let objetivo = formData.get("objetivos");

            const dataRequest = {
                "id":id,
                "productCode":codigoProducto,
                "total": total,
                "goal": objetivo,
                "type":"SELL",
                "done":1,
            };
        
            axios.put('http://ligafalm.eu:28100/transactions/'+id, dataRequest, {headers})
                .then((url)=>{
                    window.location.assign("transacciones.html");
                })
        });
    });
}




// DELETE ONE TRANSACTION
function borrarTransaccion(){
    let borrar = confirm("¿Desea borrar esta transacción?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/transactions/'+id, {headers})
            .then((url)=>{
                window.location.assign("transacciones.html");
            })
            .catch((error)=>
            console.log(error)
            );
            
    }  
    };


// GET ALL PRODUCTS
// Recuperamos TODOS LOS PRODUCTOS y mostramos su codigo en el formulario
function listaCodigosFormulario(){
    axios.get('http://ligafalm.eu:28100/products/?page=0&size=100')
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
}




// GET ALL GOALS
// Recuperamos TODOS LOS OBJETIVOS y mostramos su nombre en el formulario
function listaObjetivosFormulario(){
    axios.get('http://ligafalm.eu:28100/goals/?page=0&size=100')
    .then((respuesta) => { 
        let objetivos = respuesta.data;

        let lista = `<select name="objetivos", id="obj">`;         
        let options=``;
        let finLista=`</select>`;

        objetivos.forEach(item => {
        options+=`<option value="${item.id}">${item.name}</option> `;
        });

        lista += options+finLista;
        document.getElementById("listaObjetivos").innerHTML = lista;
    });
}











// ########### MOVIMIENTOS ##########################################################################################
function volver(){
    url = window.location.assign("transacciones.html");
}



