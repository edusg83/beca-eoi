const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};





// ########### LLAMADAS #########################################################################################
tablaTransacciones();
listaTransaccionesFormulario();
recuperarUnaTransaccion();


// ########### CRUD ##############################################################################################

// GET ALL TRANSACTIONS
// Recuperamos 10 TRANSACCIONES y las mostramos en una tabla
 function tablaTransacciones(){
    axios.get('http://ligafalm.eu:28100/transactions')
        .then((respuesta) => { 
            let transacciones = respuesta.data;
            let tabla = `
                <h1>Lista de transacciones</h1>
                <table id="dataTable", class="tg">
                    <thead>
                        <tr>
                            <th class="th">Id</th>
                            <th class="th">Código del producto</th>
                            <th class="th">Total</th>
                            <th class="th">Tipo</th>
                            <th class="th">Objetivo</th> 
                            <th class="th">Opciones</th>  
                        </tr>
                    </thead>
                    <tbody>`;         
            let filas=``;
            let finTabla=`
                        </tbody>
                    </table>`;

            transacciones.forEach(item => {
            filas+=`
                <tr>
                    <td class="tg-0lax">
                        ${item.id}
                    </td>
                    <td class="tg-0lax">${item.productCode}</td>
                    <td class="tg-0lax", style="text-align:center;"> ${item.total}</td>
                    <td class="tg-0lax", style="text-align:center;">${item.type}</td>
                    <td class="tg-0lax", style="text-align:center;">${item.goal}</td>
                    <td class="opciones"> 
                        <a href="transaccion.html?id=${item.id}")"><img src="editar.png", width=20px></a>
                        <a onclick="borrarTransaccion(${item.id})"><img src="borrar.png", width=20px></a>
                    </td>
                </tr>`;
            });

            tabla += filas+finTabla;
            document.getElementById("tablaTransacciones").innerHTML = tabla;
        });
 }

// Recuperamos TODAS LAS TRANSACCIONES y la mostramos en el formulario
function listaTransaccionesFormulario(){
    axios.get('http://ligafalm.eu:28100/transactions/?page=0&size=100')
    .then((respuesta) => { 
        let transaccion = respuesta.data;

        let lista = `<select name="transaccionesBusqueda", id="transBusq">`;         
        let options=``;
        let finLista=`</select>`;

        transaccion.forEach(item => {
        options+=`<option value="${item.id}">${item.id}</option> `;
        });

        lista += options+finLista;
        document.getElementById("listaTransacciones").innerHTML = lista;
    });
}


// GET ONE TRANSACTION
// Cuando le damos al botón de buscar, muestra la transaccion cuya id se ha seleccionado
function recuperarUnaTransaccion(){
    const formulario = document.getElementById("formulario4");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let ID = formData.get("transaccionesBusqueda");
        console.log(ID)

        axios.get('http://ligafalm.eu:28100/transactions/'+ID, {headers})
            .then((respuesta)=>{
                let transaccion = respuesta.data;
                
                if(transaccion.id===undefined){
                document.getElementById("transaccionEncontrada").innerHTML = "Introduzca un ID";
                } else {
                    encuentraTransaccion(transaccion);
                }
            })
            .catch((error)=>{
                document.getElementById("transaccionEncontrada").innerHTML = "Transaccion no existente",
                console.log(error)
        });    
    });
};
// Funcion que muestra una transaccion
function encuentraTransaccion(transaccion){
    let tabla = `
    <table id="dataTable", class="tg">
        <thead>
            <tr>
                <th class="th">Id</th>
                <th class="th">Código del producto</th>
                <th class="th">Total</th>
                <th class="th">Tipo</th>
                <th class="th">Objetivo</th> 
                <th class="th">Opciones</th>  
            </tr>
        </thead>
        <tbody>      
            <tr>
                <td class="tg-0lax">
                    ${transaccion.id}
                </td>
                <td class="tg-0lax">${transaccion.productCode}</td>
                <td class="tg-0lax", style="text-align:center;"> ${transaccion.total}</td>
                <td class="tg-0lax", style="text-align:center;">${transaccion.type}</td>
                <td class="tg-0lax", style="text-align:center;">${transaccion.goal}</td>
                <td class="opciones"> 
                    <a href="transaccion.html?id=${transaccion.id}")"><img src="editar.png", width=20px></a>
                    <a onclick="borrarTransaccion(${transaccion.id})"><img src="borrar.png", width=20px></a>
                </td>
            </tr>
        </tbody>
    </table>`;
    document.getElementById("transaccionEncontrada").innerHTML = tabla;
}

// GET ONE GOAL
function recuperarUnObjetivo(id){
    axios.get('http://ligafalm.eu:28100/goals/'+id, {headers})
        .then((objetivo)=>{

        })
}



// DELETE ONE TRANSACTION
function borrarTransaccion(id){
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



// ###### MOVIMIENTOS ####################################################################################################
function volver(){
    url = window.location.assign("inicio.html");
}

function goToProductos(){
    url = window.location.assign("productos.html");
}