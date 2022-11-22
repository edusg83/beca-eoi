// Recuperamos el id
let url = window.location.href;
let id = url.split("=")[1];


// Recuperamos el producto y lo mostramos





muestraProducto(id);
actualizarProducto(id);



function actualizarProducto(id){
    const formulario = document.getElementById("formulario1");
    formulario.addEventListener("submit", function(element){
        element.preventDefault();
        const formData = new FormData(formulario);
        var nombre = formData.get("nombre");
        var descripcion = formData.get("descripcion");
        var codigo = formData.get("codigo");


        const headers = {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        };

        axios.put('http://ligafalm.eu:28100/products/'+id, {headers})
            .then((elemento)=>{
                let producto = elemento.data;
                producto.name = nombre;
                producto.description = descripcion;
                producto.code = codigo;
            })
       

        
});
}









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
