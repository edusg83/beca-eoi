var objeto = {
    colorVerde: function() {
        console.log("VERDE")
    }
};
objeto.colorVerde();
objeto['colorRojo'] = function() {console.log("ROJO")};
objeto.colorRojo();

objeto['colorRojo'] = function() {this.colorVerde()};
objeto.colorRojo();