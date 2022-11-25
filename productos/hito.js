const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

// Recuperamos el id
let url = window.location.href;
let id = url.split("=")[1];


// ############# LLAMADAS ########################3
actualizarHito();
tablaObjetivosHito(id);



// ############## CRUD #####################################

// GET ALL MILESTONES FROM ONE GOAL
// Recuperamos TODAS LOS OBJETIVOS DE UN HITO
function tablaObjetivosHito(id){
    axios.get('http://ligafalm.eu:28100/milestones/'+id+'/goals')
    .then((respuesta)=>{
        let objetivos = respuesta.data.goals;
        let tabla = `
                <h1>Objetivos del hito</h1>
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
            document.getElementById("tablaHitos").innerHTML = tabla;
    })
 }



 


// DELETE ONE MILESTONE
function borrarHito(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

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

// PUT ONE MILESTONE
function actualizarHito(){
    // Recuperamos el id
    let url = window.location.href;
    let id = url.split("=")[1];

    axios.get('http://ligafalm.eu:28100/milestones/'+id, {headers})
    .then((hito) => { 
        // Recuperamos los datos del hito y los metemos en el formulario
        document.getElementById("nom").value = hito.data.name;
        document.getElementById("ini").value = hito.data.start;
        document.getElementById("fin").value = hito.data.end;

        // Recuperamos los datos del formulario si, y sólo si, apretamos el boton actualizar
        const formulario = document.getElementById("formulario13");
        formulario.addEventListener("submit", function(element){
            element.preventDefault();
            const formData = new FormData(formulario);
            
            let nombre = formData.get("nombre");
            let inicio = formData.get("inicio");
            let final = formData.get("final");

            const dataRequest = {
                "id":id,
                "name":nombre,
                "start": inicio,
                "end": final
            };
        
            axios.put('http://ligafalm.eu:28100/milestones/'+id, dataRequest, {headers})
                .then((url)=>{
                    url = window.location.assign("hitos.html");
                })
        });
    });
}



// ########### MOVIMIENTOS ##########################################################################################
function volver(){
    url = window.location.assign("hitos.html");
}

