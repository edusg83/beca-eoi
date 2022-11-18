const form = document.getElementById("formulario1");

    form.addEventListener('submit',function(element){
        element.preventDefault();

        const fromData = new FormData(form);
        var nombre = fromData.get("nombreUsuario");
        var correo = fromData.get("emaileUsuario");
        var provincia = fromData.get("provinciaUsuario");

        if(nombre.toLocaleLowerCase().indexOf("antonio")>=0){
            if(correo){
                console.log("Nombre: "+nombre+" Correo: "+correo+" Provincia: "+provincia);
            }else{
                window.alert("Los datos del formulario no son correctos");
            }
        }else{
            window.alert("Los datos del formulario no son correctos");
        }
    });
