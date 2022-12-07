const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};



// ############ LLAMADAS ##########################################################
tablaHitos();
recuperarUnHito();
listaHitosFormulario();

// ################ CRUD #################################################


// GET ALL MILESTONES
// Recupera 10 HITOS y los mete en una tabla
function tablaHitos(){
    axios.get('http://ligafalm.eu:28100/milestones?page=0&size=100')
    .then((respuesta) => { 
        let objetivos = respuesta.data;
        
        let tabla =`
        <h1>Lista de hitos</h1>
        <table id="dataTable", class="tg">
            <thead>
                <tr>
                    <th class="th">Id</th>
                    <th class="th">Nombre</th>
                    <th class="th">Inicio</th>
                    <th class="th">Fin</th>
                    <th class="th">Progreso</th>
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
                <td class="tg-0lax"> ${item.start}</td>
                <td class="tg-0lax"> ${item.end}</td>
                <td class="tg-0lax"> ${item.progress}</td>
                <td class="opciones"> 
                    <a href="hito.html?id=${item.id}")"><img src="editar.png", width=20px></a>
                    <a onclick="borrarHito(${item.id})"><img src="borrar.png", width=20px></a>
                </td>
            </tr>`;
        });


        tabla += filas+finTabla;
        document.getElementById("tablaHitos").innerHTML = tabla;
    });
};

// Recuperamos TODOS LOS HITOS y los mostramos en el formulario
function listaHitosFormulario(){
    axios.get('http://ligafalm.eu:28100/milestones?page=0&size=100')
        .then((respuesta) => { 
            let hitos = respuesta.data;

            let lista = `<select name="hitosBusqueda", id="hitBusq">`;         
            let options=``;
            let finLista=`</select>`;

            hitos.forEach(item => {
            options+=`<option value="${item.id}">${item.name}</option> `;
            });

            lista += options+finLista;
            document.getElementById("listaHitos").innerHTML = lista;
});
}


// GET ONE MILESTONE
// Cuando le damos al botón de buscar, muestra el hito cuya id se ha seleccionado
function recuperarUnHito(){
    const formulario = document.getElementById("formulario11");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        
        let ID = formData.get("hitosBusqueda");

        axios.get('http://ligafalm.eu:28100/milestones/'+ID, {headers})
            .then((respuesta)=>{
                let hito = respuesta.data;
                
                if(hito.id===undefined){
                document.getElementById("hitoEncontrado").innerHTML = "Introduzca un ID";
                } else {
                    pintaHito(hito);
                }
            })
            .catch((error)=>{
                document.getElementById("hitoEncontrado").innerHTML = "Hito no existente",
                console.log(error)
        });    
    });
}
// Funcion que muestra un hito
function pintaHito(hito){
    let tabla = `
        <table id="dataTable", class="tg">
            <thead>
                <tr>
                    <th class="th">Id</th>
                    <th class="th">Nombre</th>
                    <th class="th">Inicio</th>
                    <th class="th">Fin</th>
                    <th class="th">Progreso</th>
                    <th class="th">Opciones</th>
                </tr>
            </thead>
            <tbody> 
            <tr>
                <td class="tg-0lax">
                    ${hito.id}
                </td>
                <td class="tg-0lax">${hito.name}</td>
                <td class="tg-0lax"> ${hito.start}</td>
                <td class="tg-0lax"> ${hito.end}</td>
                <td class="tg-0lax"> ${hito.progress}</td>
                <td class="opciones"> 
                    <a href="hito.html?id=${hito.id}")"><img src="editar.png", width=20px></a>
                    <a onclick="borrarHito(${hito.id})"><img src="borrar.png", width=20px></a>
                </td>
            </tr>       
        </tbody>
    </table>`;
    document.getElementById("hitoEncontrado").innerHTML = tabla;
}

// DELETE ONE MILESTONE
function borrarHito(id){
    let borrar = confirm("¿Desea borrar este hito?");

    if (borrar === true){
        axios.delete('http://ligafalm.eu:28100/milestones/'+id, {headers})
            .then((url)=>{
                window.location.assign("hitos.html");
            })
            .catch((error)=>
            console.log(error)
            );
            
    }  
};

