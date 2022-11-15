var funciones = {
    colorVerde: function(){
        console.log("VERDE");
    }
};

funciones.colorVerde();
funciones['colorRojo'] = function(){console.log("ROJO");}
funciones.colorRojo();

funciones['colorRojo'] = function(){this.colorVerde()};
funciones.colorRojo();