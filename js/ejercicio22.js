const form = document.getElementById("formulario1");

form.addEventListener("submit", function(elem) {
    elem.preventDefault();
    const formData = new FormData(form);
    var nombre = formData.get("nombre"),
        email = formData.get("email"),
        provincia = formData.get("provincia");
    
    if(nombre.length > 0 && nombre.length <= 20 && nombre.startsWith("Antonio") === true && email != "" && provincia != "default"){
        parrafo.innerHTML = "Nombre: " + nombre + "</br>" + "Email: " + email + "</br>" + "Provincia: " + provincia;
    } else {
        parrafo.innerHTML = "Los datos del formulario no son correctos";
    }
});

//OTRA MANERA DE HACERLO:

// form.addEventListener("submit", function(elem) {
//     elem.preventDefault();
//     const formData = new FormData(form);
//     var nombre = formData.get("nombre"),
//         email = formData.get("email"),
//         provincia = formData.get("provincia")
//         palabraInicial = nombre.startsWith("ANTONIO");
//         verificado = [false, false, false];
//         resultado = "";

//     if(nombre.length > 0 && nombre.length <= 20 && nombre.startsWith("Antonio") === true){
//         resultado += "Nombre: " + nombre;
//         verificado[0] = true;
//     }

//     if(email.length > 0) {
//         resultado += "<br>";
//         resultado += "Email: " + email;
//         resultado += "<br>";
//         verificado[1] = true;
//     }

//     if(provincia != "default") {
//         resultado += "Provincia: " + provincia;
//         verificado[2] = true;
//     }

//     if(verificado[0] === true && verificado[1] === true && verificado[2] === true) {
//         document.getElementById("parrafo").innerHTML = resultado;
//     } else {
//         document.getElementById("parrafo").innerHTML = "Los datos del formulario no son correctos";
//     }
// });