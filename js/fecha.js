const form = document.getElementById("formulario");

form.addEventListener("submit", function(elem) {
    elem.preventDefault();
    const formData = new FormData(form);
    var fecha = formData.get("fecha");
    console.log(fecha);

    if(fecha != null) {
        parrafo.innerHtml = "Fecha: " + fecha;
    }
});  





function fecha(fechaActual, mesAmpliable) {
    //fecha actual de convierte en array y se define cada uno de sus elementos y se suma el mesAmpliable
    var fechaCadena = fechaActual.split("-");
    var suma = Number(fechaCadena[1]) + Number(mesAmpliable);

    var anyo = Number(fechaCadena[0]);
    var mes = Number(fechaCadena[1]);
    var dia = Number(fechaCadena[2]);

    //Se suma el anyo si es necesario y se ajustan los meses
    if(suma > 12) {
        anyo = Number(fechaCadena[0]) + 1;
        mes = (Number(fechaCadena[1]) + mesAmpliable) - 12;
    }

    //Asegurarse que la fecha sigue usando el mismo formato de dos cifras. P.E: 01/01/2022
    if(mes < 10) {mes = "0" + mes;}
    if(dia < 10) {dia = "0" + dia;}

    //Imprime fecha nueva por consola y por alert
    var mensaje = dia + "/" + mes + "/" + anyo;
    console.log(mensaje);
    alert(mensaje);
}

