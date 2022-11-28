/*
var ProvinciaID = document.getElementById("provinciaId");

ProvinciaID.onchange = function(){
    var indice = ProvinciaID.selectedIndex;
    var valor = ProvinciaID.options[indice].value;
    var texto = ProvinciaID.options[indice].text;
}
*/


/*

function manejador(){
    document.getElementById("formulario1").onsubmit = function(){
        let formulario = document.forms.formulario;

        let nombre = formulario.nombre;
        let email = formulario.email;
        let provincia = formulario.provincia;
        
        
        /*
        var ok = true;

        if(ok){
            return true;
        } else {
            return false;
        }
        */
/*
        if (nombre.lenght > 20 || nombre.includes("ANTONIO") || nombre == "" || email == ""){
            confirm ("Formulario incorrecto");
            return false;
        } else {
            console.log(nombre, email, provincia)
            alert(nombre, email, provincia)
            return true;
        }
    };
}

window.onload = function(){
    manejador();
};

*/



const formulario = document.getElementById("formulario1");

formulario.addEventListener("submit", function(element){
    element.preventDefault();
    const formData = new FormData(formulario);
    var nombre = formData.get("nombre");
    var email = formData.get("email");
    var provincia = formData.get("provincia");
    validacion(nombre, email, provincia);
    
});

let ok = false;
let resultado = "Los datos del formulario son incorrectos";

function validacion (nombre, email, provincia){
    if (nombre.lenght > 20 || !nombre.startsWith("ANTONIO") || nombre == "" || email == ""){        
    } else {
        ok = true;
        resultado = "Nombre: " + nombre + "<br>Email: " + email + "<br>Provincia: " + provincia;
    }
    document.getElementById("resultado").innerHTML = resultado;
    return ok;
}