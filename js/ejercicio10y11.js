//ejercicio 10
var funciones = {
    colorVerde: function(){
        return console.log("VERDE");
    }
}
funciones.colorVerde();

funciones['colorRojo'] = function() {console.log("ROJO")};
funciones.colorRojo();

//ejercicio 11: 2 opciones:
//1
funciones['colorRojo'] = function() {objeto.colorVerde()};
funciones.colorRojo();
//2 (MEJOR)
funciones['colorRojo'] = function() {this.colorVerde()};
funciones.colorRojo();