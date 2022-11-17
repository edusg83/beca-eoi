(function () {
var caja = document.getElementById("cajaTexto");
document.addEventListener("keypress",function(evt) {
    var ascii = evt.charCode;

    if (ascii > 64 && ascii < 91) {
        //solo dejamos mayusculas
        //las minusculas van del 97 al 122
    } else {
        evt.preventDefault();
    }
},false);
}());