document.getElementById("enviar").onclick = function(){
    if(!registro(document.getElementById("nombre").value,document.getElementById("Email").value,document.getElementById("provincia").value)){
        window.alert("Los datos del formulario no son correctos");
    }
}

function registro(nombre,correo,provincia){
    if(nombre.toLocaleLowerCase().indexOf("antonio")>=0){
        if(correo){           
            console.log("Nombre: "+nombre+" Correo: "+correo+" Provincia: "+provincia);
            return true;
        }else{
            return false;           
        }
    }else{
        return false;
    }
}