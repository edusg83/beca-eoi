const form = document.getElementById("formulario");

form.addEventListener("submit",function(elem) {
    elem.preventDefault();

    const formData = new FormData(form);
    var nombre = formData.get("nombre"),
        correo = formData.get("email"),
        prov = formData.get("provincia");

    if(nombre != "" && correo != "" && prov != "" 
       && nombre.length > 19 && nombre.startsWith("antonio")) {

        console.log("funciona c: " + nombre.length);
        mensaje(1);

    } else {

        console.log("Error");
        mensaje(0);

    }
},false)

function mensaje(param1) {
    if(param1 == 0) {
        document.getElementById("resultado").innerHTML = "Los datos no son correctos";
    } else {
        document.getElementById("resultado").innerHTML = ("nombre "+nombre.value+
                                                          "<br> Correo: "+email.value+
                                                          "<br> Provincia: "+provincia.value);
    }
}