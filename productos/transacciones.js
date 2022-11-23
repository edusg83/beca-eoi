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
        tablaTransacciones(transacciones);
    });
// Funcion que muestra la lista de productos en una tabla
function tablaTransacciones(transacciones){
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
}





// ###### MOVIMIENTOS ####################################################################################################
function volver(){
    url = window.location.assign("inicio.html");
}