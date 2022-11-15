var funciones = {
    colorVerde: function(){
        return console.log("VERDE");
    }
}
funciones.colorVerde();

funciones['colorRojo'] = function() {console.log("ROJO")};
funciones.colorRojo();

funciones['colorRojo'] = function() {this.colorVerde()};
funciones.colorRojo();