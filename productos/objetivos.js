const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};







// ########### LLAMADAS #################################################################################################

tablaObjetivos();
listaObjetivosFormulario();
recuperarUnObjetivo();


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

// Recuperamos TODOS LOS OBJETIVOS y los mostramos en el formulario
function listaObjetivosFormulario(){
    axios.get('http://ligafalm.eu:28100/goals?page=0&size=100')
        .then((respuesta) => { 
            let productos = respuesta.data;

            let lista = `<select name="objetivosBusqueda", id="objBusq">`;         
            let options=``;
            let finLista=`</select>`;

            productos.forEach(item => {
            options+=`<option value="${item.id}">${item.name}</option> `;
            });

            lista += options+finLista;
            document.getElementById("listaObjetivos").innerHTML = lista;
});
}



// GET ONE GOAL
// Cuando le damos al botón de buscar, muestra el objetivo cuya id se ha seleccionado
function recuperarUnObjetivo(){
    const formulario = document.getElementById("formulario7");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let ID = formData.get("objetivosBusqueda");

        axios.get('http://ligafalm.eu:28100/goals/'+ID, {headers})
            .then((respuesta)=>{
                let objetivo = respuesta.data;
                
                if(objetivo.id===undefined){
                document.getElementById("objetivoEncontrado").innerHTML = "Introduzca un ID";
                } else {
                    pintaObjetivo(objetivo);
                }
            })
            .catch((error)=>{
                document.getElementById("objetivoEncontrado").innerHTML = "Objetivo no existente",
                console.log(error)
        });    
    });
}
// Funcion que muestra un producto
function pintaObjetivo(objetivo){
    let tabla = `
        <table id="dataTable", class="tg">
            <thead>
                <tr>
                    <th class="th">Id</th>
                    <th class="th">Nombre</th>
                    <th class="th">Descripción</th>
                    <th class="th">Asignado a</th>
                    <th class="th">Opciones</th>  
                <tr>
                    <td class="tg-0lax">
                        ${objetivo.id}
                    </td>
                    <td class="tg-0lax">${objetivo.name}</td>
                    <td class="tg-0lax"> ${objetivo.description}</td>
                    <td class="tg-0lax"> ${objetivo.assignedTo}</td>
                    <td class="opciones"> 
                        <a href="objetivo.html?id=${objetivo.id}")"><img src="editar.png", width=20px></a>
                        <a onclick="borrarObjetivo(${objetivo.id})"><img src="borrar.png", width=20px></a>
                    </td>
                </tr>        
        </tbody>
    </table>`;
    document.getElementById("objetivoEncontrado").innerHTML = tabla;
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