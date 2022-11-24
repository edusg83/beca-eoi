const transactionsURL = 'http://ligafalm.eu:28100/transactions';
const productosURL = 'http://ligafalm.eu:28100/products';
const objetivosURL = 'http://ligafalm.eu:28100/goals';
const headers ={
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
};

showAllTransactions();

function showAllTransactions(){

    axios.get(transactionsURL+"?page=0&size=100",{headers})
    .then(data => {
        let respuesta = data.data;
        let filas = ``;
        respuesta.forEach(element => {

            filas += `<tr>
            
            
            <td>${element.productCode}</td>
            <td>${element.total}</td>
            <td>${element.done}</td>
            <td>${element.type}</td>
            
            </tr>
            `

        });

        document.getElementById("filas").innerHTML = filas;

})
.catch((error)=>{
    console.log(error);
});

}


function showModalCreateSelect(){

    axios.get(productosURL,{headers})
    .then(data => {
        let respuesta = data.data;
        let mySelect1=``;
        respuesta.forEach(element => {

            mySelect1+=`<option value="${element.code}">${element.name}</option>`
        
        });

        

        document.getElementById("productoSelect").innerHTML=mySelect1;


   })


   axios.get(objetivosURL,{headers})
   .then(data => {
    let respuesta = data.data;
    let mySelect2=``;
    respuesta.forEach(element => {
   
        mySelect2+=`<option value="${element.id}">${element.name}</option>`
    
    });
   
    
   
    document.getElementById("objetivoSelect").innerHTML=mySelect2;
   
   
   })

}  


function createTransaction(){

    const transactionForm = document.getElementById("formCrearTrans");
    

    const formData = new FormData(transactionForm);
        formData.append("type",document.getElementById("tipo").value);
        formData.append("total",document.getElementById("total").value);
        formData.append("done",document.getElementById("done").value);
        formData.append("productCode",document.getElementById("productoSelect").value);
        formData.append("goal",document.getElementById("objetivoSelect").value);
        

        axios.post(transactionsURL,formData,{headers})
        .then((respuesta)=>{
            console.log(respuesta.data);
        })
        .catch((error)=>{
            console.log(error);
        });


}


