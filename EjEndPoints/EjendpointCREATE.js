const form = document.getElementById("formularioC");

form.addEventListener("submit",function(elem) {
    elem.preventDefault();

    const formData = new FormData(form);

    var prod = formData.get("producto"),
        desc = formData.get("descripcion"),
        cod = formData.get("codigo");

    if(prod != "" && desc != "" && cod != "") {

        console.log("funciona c:");
        mensaje(1);

    } else {

        console.log("Error");
        mensaje(0);

    }
},false);

function mensaje(param1) {
    if(param1 == 0) {
        alert("Los datos no son correctos");
    } else {
        alert("Codigo: "+codigo.value+" | Producto: "+producto.value+" | Descripcion: "+descripcion.value);
    }
}
