
const form = document.getElementById("formulario");


form.addEventListener('submit', function (element) {
    element.preventDefault();
    check1 = false;
    check2 = false;
    const formData = new FormData(form);
    var formName = formData.get("nombre");
    var formMail = formData.get("mail");
    var formProvincia = formData.get("provincia");

    if (formName.length <= 20 && formName.includes("ANTONIO")) {
        check1 = true;
    }
    if (formName != "" && formMail != "" && formProvincia != "") {
        check2 = true;
    }

    if (check1 == true && check2 == true) {
        var resultado = "Nombre: " + formName + " Mail: " + formMail;
        document.getElementById("resultado").innerHTML = resultado;
        
    }else{
        alert("Datos incorrectos.")
    }

});



