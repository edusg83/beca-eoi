var objeto = {
    colorVerde: function() {
        console.log("VERDE")
    }
};
objeto.colorVerde();
objeto['colorRojo'] = function() {console.log("ROJO")};
objeto.colorRojo();

objeto['colorRojo'] = function() {objeto.colorVerde()};
objeto.colorRojo();