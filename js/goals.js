const objetivosURL = 'http://ligafalm.eu:28100/goals';
const headers ={
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
};

showAllGoals();

function showAllGoals(){

    axios.get(objetivosURL+"?page=0&size=100",{headers})
    .then(data => {
        let respuesta = data.data;
        let filas = ``;
        respuesta.forEach(element => {

            filas += `<tr>
            
            
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td>${element.assignedTo}</td>
            <td>${element.progress}</td>
            <td><button type="button" class="btn btn-primary" data-toggle="modal" onclick='insertTransactionsModal(${JSON.stringify(element.transactions)})' data-target="#modalShowTransactions" 
            >TRANSACCIONES</td>
            
            </tr>
            `

        });

        document.getElementById("filas").innerHTML = filas;

})
.catch((error)=>{
    console.log(error);
});

}


function insertTransactionsModal(transacciones){
    let transaccion=``;

    transacciones.forEach(element => {
        transaccion+=`
         <label for="code">Código producto:</label>
          <p id="code">${element.productCode}</p>
          <label for="total">Total:</label>
          <p id="total">${element.total}</p>
          <label for="done">Code:</label>
          <p id="done">${element.done}</p>
          <label for="type">Code:</label>
          <p id="type">${element.type}</p>
          <label for="options">Code:</label>
          <p id="options">Options</p> 
          <hr/>
        `
        
    });

document.getElementById("bodyTransactions").innerHTML=transaccion;


}

         