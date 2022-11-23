const usersURL = 'http://ligafalm.eu:28100/products';
var respuesta;


axios.get(usersURL)

    .then(data => {

        let respuesta = data.data;
        let filas = ``;
        respuesta.forEach(element => {

            filas += `<tr>
            
            <th scope="row"><button type="button" class="btn btn-primary" data-toggle="modal" onclick="insertDataModal(${element.id})" data-target="#miModal" 
            >${element.id} </th>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.code}</td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" onclick="updateModal(${element.id})" data-target="#modalUpdate" 
            >UPDATE</td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" onclick="insertDataModal(${element.id})" data-target="#deleModal" style="background-color: #f44336" 
            >DELETE</td>
            </tr>
            `

        });

        document.getElementById("filas").innerHTML = filas;

})


function insertDataModal(id){
    const usersURL = 'http://ligafalm.eu:28100/products/' + id;
    var respuesta;

    axios.get(usersURL)
        .then(data => {
            let respuesta = data.data;
            
document.getElementById("nombre").innerHTML=respuesta.name;
document.getElementById("descripcion").innerHTML=respuesta.description;
document.getElementById("codigo").innerHTML=respuesta.code;

})
};


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
        
   

};

function updateModal(id){
    const usersURL = 'http://ligafalm.eu:28100/products/' + id;
    var respuesta;

    axios.get(usersURL)
        .then(data => {
            let respuesta = data.data;

})
};

