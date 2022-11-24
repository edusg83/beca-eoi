const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};







// ########### LLAMADAS #################################################################################################

tablaObjetivos();
listaProductosFormulario();
recuperarUnElemento();


// ########### CRUD ##############################################################################################

// GET ALL GOALS
// Recuperamos 10 OBJETIVOS y los mostramos en una tabla
function tablaObjetivos(){
    axios.get('http://ligafalm.eu:28100/goals')
    .then((respuesta) => { 
        let objetivos = respuesta.data;
        
        let tabla = `
        <h1>Lista de objetivos</h1>
        <table id="dataTable", class="tg">
            <thead>
                <tr>
                    <th class="th">Id</th>
                    <th class="th">Nombre</th>
                    <th class="th">Descripción</th>
                    <th class="th">Asignado a</th>
                    <th class="th">Opciones</th>  
                </tr>
            </thead>
            <tbody>`;         
        let filas=``;
        let finTabla=`
            </tbody>
        </table>`;
    
        objetivos.forEach(item => {
        filas+=`
            <tr>
                <td class="tg-0lax">
                    ${item.id}
                </td>
                <td class="tg-0lax">${item.name}</td>
                <td class="tg-0lax"> ${item.description}</td>
                <td class="tg-0lax"> ${item.assignedTo}</td>
                <td class="opciones"> 
                    <a href="objetivo.html?id=${item.id}")"><img src="editar.png", width=20px></a>
                    <a onclick="borrarObjetivo(${item.id})"><img src="borrar.png", width=20px></a>
                </td>
            </tr>`;
        });

        tabla += filas+finTabla;
        document.getElementById("tablaObjetivos").innerHTML = tabla;
    });
}

// Recuperamos TODOS LOS PRODUCTOS y los mostramos en el formulario
function listaProductosFormulario(){
    axios.get('http://ligafalm.eu:28100/products?page=0&size=100')
        .then((respuesta) => { 
            let productos = respuesta.data;

            let lista = `<select name="productosBusqueda", id="prodBusq">`;         
            let options=``;
            let finLista=`</select>`;

            productos.forEach(item => {
            options+=`<option value="${item.id}">${item.id}</option> `;
            });

            lista += options+finLista;
            document.getElementById("listaProductos").innerHTML = lista;
});
}



// GET ONE PRODUCT
// Cuando le damos al botón de buscar, muestra el producto cuya id se ha seleccionado
function recuperarUnElemento(){
    const formulario = document.getElementById("formulario3");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let ID = formData.get("productosBusqueda");

        axios.get('http://ligafalm.eu:28100/products/'+ID, {headers})
            .then((respuesta)=>{
                let producto = respuesta.data;
                
                if(producto.id===undefined){
                document.getElementById("articuloEncontrado").innerHTML = "Introduzca un ID";
                } else {
                    pintaProducto(producto);
                }
            })
            .catch((error)=>{
                document.getElementById("articuloEncontrado").innerHTML = "Producto no existente",
                console.log(error)
        });    
    });
}
// Funcion que muestra un producto
function pintaProducto(producto){
    let tabla = `
    <table id="dataTable", class="tg">
        <thead>
            <tr>
                <th class="th">Id</th>
                <th class="th">Nombre</th>
                <th class="th">Descripción</th>
                <th class="th">Código</th>
                <th class="th">Opciones</th>  
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tg-0lax">
                    ${producto.id}
                </td>
                <td class="tg-0lax">${producto.name}</td>
                <td class="tg-0lax"> ${producto.description}</td>
                <td class="tg-0lax">${producto.code}</td>
                <td class="opciones"> 
                    <a href="producto.html?id=${producto.id}")"><img src="editar.png", width=20px></a>
                    <a onclick="borrarProducto(${producto.id})"><img src="borrar.png", width=20px></a>
                </td>
            </tr>        
        </tbody>
    </table>`;
    document.getElementById("articuloEncontrado").innerHTML = tabla;
}



// DELETE ONE PRODUCT
function borrarProducto(id){
    let borrar = confirm("¿Desea borrar este producto?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/products/'+id, {headers})
            .then((url)=>{
                window.location.assign("productos.html");
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