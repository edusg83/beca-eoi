funciones = {
    colorVerde: function() {
        console.log("COLOR VERDE")
    }
};


funciones['colorRojo'] = function() {this.colorVerde()};
funciones.colorRojo();


