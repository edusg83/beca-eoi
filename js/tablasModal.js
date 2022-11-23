const usersURL = 'http://ligafalm.eu:28100/products';
var respuesta;
var idItemEliminar;

axios.get(usersURL)

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



function mostrar(id){
    const usersURL = 'http://ligafalm.eu:28100/products/' + id;
    var respuesta;

    axios.get(usersURL)
        .then(data => {
            let respuesta = data.data;
            
document.getElementById("nombre").innerHTML=respuesta.name;
document.getElementById("descripcion").innerHTML=respuesta.description;
document.getElementById("codigo").innerHTML=respuesta.code;

})
}


function create(){
    const form = document.getElementById("formCrear");
    const url = 'http://ligafalm.eu:28100/products';
    const headers ={
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    
        const formData = new FormData(form);
        formData.append("name",document.getElementById("nameNew").value);
        formData.append("description",document.getElementById("descNew").value);
        formData.append("code",document.getElementById("codeNew").value);
        //console.log([...formData]);
        
        //document.getElementById("idNew").value;

        axios.post(url,formData,{headers})
        .then((respuesta)=>{
            console.log(respuesta.data);
        })
        .catch((error)=>{
            console.log(error);
        })
        
   

}


function showUpdate(id){
    const usersURL = 'http://ligafalm.eu:28100/products/';
    var respuesta;

    axios.get(usersURL+id)
    .then(data=>{
        respuesta=data.data;
        document.getElementById("nameUpdate").value=respuesta.name;
        document.getElementById("descUpdate").value=respuesta.description;
        document.getElementById("codeUpdate").value=respuesta.code;
        document.getElementById("idUpdate").value=respuesta.id;


    });

}

function update(){
    let id=document.getElementById("idUpdate").value;
    const form = document.getElementById("formUpdate");
    const url = 'http://ligafalm.eu:28100/products/'+id;
    const headers ={
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    const formData = new FormData(form);
        formData.append("id",Number(id));
        formData.append("name",document.getElementById("nameUpdate").value);
        formData.append("description",document.getElementById("descUpdate").value);
        formData.append("code",document.getElementById("codeUpdate").value);
        
        
        //const dataRequest={"id":10,"name":"javiUpdate","description":"descUpdate","code":"codeUpdate"};
    
        

        axios.put(url,formData,{headers})
        .then((respuesta)=>{
            console.log(respuesta.data);
        })
        .catch((error)=>{
            console.log(error);
        });
}

function deleteElemento(){
    const url = 'http://ligafalm.eu:28100/products/' + idItemEliminar;
    const headers ={
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    axios.delete(url,{headers})
    
    .catch((error)=>{
        console.log(error);

    });
}

