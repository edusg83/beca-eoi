const headers = {

    'Content-Type':'application/json',

    'Access-Control-Allow-Origin': '*'
};

const urlProducts = 'http://ligafalm.eu:28100/products';

axios.get(urlProducts,{headers})
.then((respuestaProduc) => {
    var productArray;
    productArray = respuestaProduc.data;

    let tabla = `<table id = "table">
<thead>
    <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Codigo</th>
    </tr>
</thead>
<tbody>`;

let finTabla=`</tbody>
    </table>`;

let filas=``;

productArray.forEach(item => {
    filas+=`
    <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.code}</td>
    </tr>`;
});
tabla+=filas+finTabla;
document.getElementById("resultado").innerHTML=tabla;
})