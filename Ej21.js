document.getElementById("boton1").onclick = function(){
    if(document.getElementById("p1").classList=="parrafo" ){
        document.getElementById("p1").classList.remove("parrafo");
        document.getElementById("boton1").classList.remove("aplicado");
        document.getElementById("boton1").textContent = "Aplicar estilo a parrafo";
    }else{
        document.getElementById("p1").classList="parrafo";
        document.getElementById("boton1").classList="aplicado";
        document.getElementById("boton1").textContent  = "Quitar estilo al parrafo";
    }
}