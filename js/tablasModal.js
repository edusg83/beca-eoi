const usersURL = 'http://ligafalm.eu:28100/products';
var idItemEliminar;

const headers ={
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
};

getInit();

function getInit(){

axios.get(usersURL+"?page=0&size=100",{headers})
    .then(data => {
        let respuesta = data.data;
        let filas = ``;
        respuesta.forEach(element => {

            filas += `<tr>
            
            <th scope="row"><button type="button" class="btn btn-primary" data-toggle="modal" onclick="mostrar(${element.id})" data-target="#modalShow" 
            >${element.id} </th>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.code}</td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" onclick="showUpdate(${element.id})" data-target="#modalUpdate" 
            >UPDATE</td>
            <td><button type="button" onclick="idItemEliminar=${element.id}" class="btn btn-primary" data-toggle="modal" data-target="#modalDelete" style="background-color: #f44336" 
            >DELETE</td>
            </tr>
            `

        });

        document.getElementById("filas").innerHTML = filas;

})
.catch((error)=>{
    console.log(error);
});

}



function mostrar(id){

    axios.get(usersURL+"/"+id,{headers})
        .then(data => {
            let respuesta = data.data;
            
document.getElementById("nombre").innerHTML=respuesta.name;
document.getElementById("descripcion").innerHTML=respuesta.description;
document.getElementById("codigo").innerHTML=respuesta.code;

})
.catch((error)=>{
    console.log(error);
});

}


function create(){
    const form = document.getElementById("formCrear");
   
    
        const formData = new FormData(form);
        formData.append("name",document.getElementById("nameNew").value);
        formData.append("description",document.getElementById("descNew").value);
        formData.append("code",document.getElementById("codeNew").value);
        //console.log([...formData]);
        
        //document.getElementById("idNew").value;

        axios.post(usersURL,formData,{headers})
        .then((respuesta)=>{
            console.log(respuesta.data);
        })
        .catch((error)=>{
            console.log(error);
        });
        
}


function showUpdate(id){
    var respuesta;

    axios.get(usersURL+"/"+id,{headers})
    .then(data=>{
        respuesta=data.data;
        document.getElementById("nameUpdate").value=respuesta.name;
        document.getElementById("descUpdate").value=respuesta.description;
        document.getElementById("codeUpdate").value=respuesta.code;
        document.getElementById("idUpdate").value=respuesta.id;
    })
    .catch((error)=>{
        console.log(error);
    });

}

function update(){
    let id=document.getElementById("idUpdate").value;
    const form = document.getElementById("formUpdate");
   
    const formData = new FormData(form);
        formData.append("id",Number(id));
        formData.append("name",document.getElementById("nameUpdate").value);
        formData.append("description",document.getElementById("descUpdate").value);
        formData.append("code",document.getElementById("codeUpdate").value);
        

        axios.put(usersURL+"/"+id,formData,{headers})
        .then((respuesta)=>{
            console.log(respuesta.data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteElemento(){
   
    axios.delete(usersURL+"/"+idItemEliminar,{headers})
    .then((respuesta)=>{
        console.log(respuesta.data);
        window.location.href="tablasModal.html"
    })
    .catch((error)=>{
        console.log(error);

    });
}

