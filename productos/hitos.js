const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};



// ############ LLAMADAS ##########################################################
tablaObjetivos();




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

function tablaObjetivos(){
    axios.get('http://ligafalm.eu:28100/milestones?page=0&size=100')
    .then((respuesta) => { 
        let objetivos = respuesta.data;
        
        let tabla =`
        <h1>Lista de Hitos</h1>
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