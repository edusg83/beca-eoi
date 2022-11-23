const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

// URL de la api
const url = 'http://ligafalm.eu:28100/transactions';



// ########### CRUD ##############################################################################################

// GET ALL
// Recuperamos la lista de productos y la mostramos
axios.get(url)
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



// GET ONE TRANSACTION
const formulario = document.getElementById("formulario4");
formulario.addEventListener("submit", function(element){
    element.preventDefault();
    const formData = new FormData(formulario);
    
    let ID = formData.get("ID");

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
// Funcion que muestra una transaccion
function encuentraTransaccion(transaccion){
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