(function() {
    var caja = document.getElementById("cajaTexto");
    document.addEventListener("keypress", function(evt) {
        var ascii = evt.charCode;

        if (ascii >=65 && ascii <=90) {
            //solo dejamos mayusculas
            //minusculas van del 97 al 122
        } else {
            evt.preventDefault();
        }
    }, false);
}());