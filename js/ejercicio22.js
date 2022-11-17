const nombre = document.getElementById("nombre"),
    email = document.getElementById("email"),
    form = document.getElementById("formulario1"),
    parrafo = document.getElementById("parrafo");


    form.addEventListener("submit", function(elem) {
        elem.preventDefault();

        const formData = new FormData(form);
        var nombre = formData.get("nombre");
        var email = formData.get("email");
        var provincia = formData.get("provincia");
        
        var ok = false;
        if(nombre.length > 0 && nombre.length <= 20 && nombre.includes("Antonio") && email != ""){
            parrafo.innerHTML = "Nombre: " + nombre + "</br>" + "Email: " + email + "</br>" + "Provincia: " + provincia;
            return ok = true;
        } else {
            parrafo.innerHTML = "Los datos del formulario no son correctos"
            return ok;
        }
    });
