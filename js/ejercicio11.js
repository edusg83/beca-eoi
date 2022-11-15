funciones={
    colorVerde: function(){
        console.log("COLOR VERDE.");
    }
}

funciones["colorRojo"] = function(){console.log("COLOR ROJO.")};
funciones.colorRojo();

funciones["colorRojo"] = function(){this.colorVerde()};
funciones.colorRojo();


