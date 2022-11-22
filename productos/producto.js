const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};







// Recuperamos el id
let url = window.location.href;
let id = url.split("=")[1];






actualizarProducto(id);



function actualizarProducto(id){

    axios.get('http://ligafalm.eu:28100/products/'+id, {headers})
    .then((producto) => { 
        // Recuperamos los datos del producto y los metemos en el formulario
        document.getElementById("nom").value = producto.data.name;
        document.getElementById("desc").value = producto.data.description;
        document.getElementById("cod").value = producto.data.code;


        // Recuperamos los datos del formulario
        const formulario = document.getElementById("formulario1");
        formulario.addEventListener("submit", function(element){
            element.preventDefault();
            const formData = new FormData(formulario);
            
            let nombre = formData.get("nombre");
            let descripcion = formData.get("descripcion");
            let codigo = formData.get("codigo");
            


            const dataRequest = {
                "id":id,
                "name":nombre,
                "description": descripcion,
                "code": codigo
            };
   
 
            
            axios.put('http://ligafalm.eu:28100/products/'+id, dataRequest, {headers})
                .then((url)=>{
                    window.location.assign("indice.html");
                })
                
    });




      
});
}








/*ç
.then((url)=>{
                    window.location.assign("index.html");
                })
// Funcion que recupera el producto y lo muestra en una tabla
function muestraProducto(id){
    axios.get('http://ligafalm.eu:28100/products/'+id)
    .then((elemento) => { 
        let producto = elemento.data;
        let tabla = `<table id="dataTable", class="tg">
        <thead>
                <tr>
                <th class="th">Id</th>
                <th class="th">Nombre</th>
                <th class="th">Descripción</th>
                <th class="th">Código</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="tg-0lax">
                    ${producto.id}
                </td>
                <td class="tg-0lax">
                    ${producto.name}
                </td>
                <td class="tg-0lax"> ${producto.description}</td>
                <td class="tg-0lax">${producto.code}</td>
            </tr>
        </tbody>
        </table>`;
        document.getElementById("resultados").innerHTML = tabla;     
    });
}
*/